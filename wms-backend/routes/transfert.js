const express = require('express');
const router = express.Router();
const connectDatabase = require('../connection')

// Utilisez le modèle de produit pour gérer les données
router.post('/getTransferts', async (req, res) => {
  const tamponId = req.body.tampon_id;
  const entrepotId = req.body.entrepot_id;
  const journee = req.body.date_heure;

  // Construisez le pipeline d'agrégation de MongoDB en fonction de la présence des paramètres
  const aggregationPipeline = [
    {
      $lookup: {
        from: "tampons",
        localField: "tampon",
        foreignField: "id",
        as: "itampons"
      }
    },
    {
      $lookup: {
        from: "entrepots",
        localField: "entrepot",
        foreignField: "id",
        as: "ientrepots"
      }
    }
  ];

  // Vérifiez si le paramètre tamponId est défini, puis ajoutez la clause $match
  if (tamponId) {
    aggregationPipeline.push({
      $match: { "tampon": tamponId }
    });
  }

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
    const result = await db.collection('transferts').aggregate(aggregationPipeline).toArray();
    res.status(200).send(result);
  } catch (err) {
      console.error('Error getting products:', err);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/addTransfert', async (req, res) => {
  try {
    const newItems = req.body;
    const db = await connectDatabase();
    const collection = db.collection('transferts'); // Collection name

    const result = await collection.insertMany(newItems);
    res.status(200).send(`${result.insertedCount} items inserted`);

  } catch (err) {
    res.status(500).json({ error: 'Error inserting items' });
  }
})

module.exports = router;



