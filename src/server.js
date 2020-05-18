const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// Iniciando o App
const app = express();

// // Iniciando o BD
mongoose.connect('mongodb://192.168.99.100:27017/mongodb_starter', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('../src/models');


app.use(express.json());
app.use('/api', require('./routes'));

app.listen(3333);
