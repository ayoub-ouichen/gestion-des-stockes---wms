const express = require('express');
const router = express.Router();
const connectDatabase = require('../connection')

// Utilisez le modèle de produit pour gérer les données
router.post('/getInventaires', async (req, res) => {
  const entrepotId = req.body.entrepot_id;
  const journee = req.body.date_heure;

  // Construisez le pipeline d'agrégation de MongoDB en fonction de la présence des paramètres
  const aggregationPipeline = [
    {
      $lookup: {
        from: "entrepots",
        localField: "entrepot",
        foreignField: "id",
        as: "ientrepots"
      }
    }
  ];

  // Vérifiez si le paramètre entrepotId est défini, puis ajoutez la clause $match
  if (entrepotId) {
    aggregationPipeline.push({
      $match: { "entrepot": entrepotId }
    });
  }

  // Vérifiez si le paramètre journee est défini, puis ajoutez la clause $match
  if (journee) {
    aggregationPipeline.push({
      $match: {
        $expr: {
          $eq: [
            {
              $dateToString: {
                format: "%Y-%m-%d",
                date: { $toDate: "$date_heure" }
              }
            },
            journee
          ]
        }
      }
    });
  }

  try {
    const db = await connectDatabase();
    const result = await db.collection('inventaires').aggregate(aggregationPipeline).toArray();
    res.status(200).send(result);
  } catch (err) {
      console.error('Error getting products:', err);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/addInventaire', async (req, res) => {
  try {
    const newItems = req.body;
    const db = await connectDatabase();
    const collection = db.collection('inventaires'); // Collection name

    const result = await collection.insertMany(newItems);
    res.status(200).send(`${result.insertedCount} items inserted`);

  } catch (err) {
    res.status(500).json({ error: 'Error inserting items' });
  }
})

module.exports = router;



