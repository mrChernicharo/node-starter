const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o BD
mongoose.connect('mongodb://192.168.99.100:27017/mongodb_starter', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Faaaala Viaaadxx');
});

app.listen(3333);
