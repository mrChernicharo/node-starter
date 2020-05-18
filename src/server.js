const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o BD
mongoose.connect('mongodb://192.168.99.100:27017/mongodb_starter', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('../src/models');

const Product = mongoose.model('Product');

// Rota GET
app.get('/', (req, res) => {
  Product.create({
    title: 'Guitarra Fender Stratocaster',
    description: 'guitarra americana de 1980',
    url: 'https://br.pinterest.com/pin/822258844453825780/',
  });

  res.send('Produto criado');
});

app.listen(3333);
