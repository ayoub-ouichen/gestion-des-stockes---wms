const express = require('express');
var cors = require('cors');
const app = express();
const receptionRoute = require('./routes/reception');
const transfertRoute = require('./routes/transfert');
const staticDataRoute = require('./routes/staticData');

app.use(cors({credentials: true, origin: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: '50mb'}));
app.use('/reception', receptionRoute);
app.use('/transfert', transfertRoute);
app.use('/staticdata', staticDataRoute);

module.exports = app;