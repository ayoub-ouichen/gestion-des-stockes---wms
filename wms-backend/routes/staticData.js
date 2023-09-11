const express = require('express');
const router = express.Router();
const connectDatabase = require('../connection')

router.get('/getFournisseurs', async (req, res) => {
    try {
        const db = await connectDatabase();
        const req = await db.collection('fournisseurs').find({}).toArray()
        res.status(200).send(req);
    } catch (err) {
        console.error('Error getting products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/getTampons', async (req, res) => {
    try {
        const db = await connectDatabase();
        const req = await db.collection('tampons').find({}).toArray()
        res.status(200).send(req);
    } catch (err) {
        console.error('Error getting products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/getEntrepots', async (req, res) => {
    try {
        const db = await connectDatabase();
        const req = await db.collection('entrepots').find({}).toArray()
        res.status(200).send(req);
    } catch (err) {
        console.error('Error getting products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/getInventaires', async (req, res) => {
    try {
        const db = await connectDatabase();
        const req = await db.collection('inventaires').find({}).toArray()
        res.status(200).send(req);
    } catch (err) {
        console.error('Error getting products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;