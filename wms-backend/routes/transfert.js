const express = require('express');
const router = express.Router();
const connectDatabase = require('../connection')

// Utilisez le modèle de produit pour gérer les données
router.get('/getReceptions', async (req, res) => {
  try {
    const db = await connectDatabase();
    const req = await db.collection('receptions').find({}).toArray()
    console.log(req);
  } catch (err) {
    console.error('Error getting products:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;