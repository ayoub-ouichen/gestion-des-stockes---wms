const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://devouichen:devouichen@myfirstcluster.d4ndcdg.mongodb.net/'; // L'URI de connexion à votre base de données MongoDB
const dbName = 'wms'; // Le nom de votre base de données

const client = new MongoClient(uri);

module.exports = async function connectDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
};