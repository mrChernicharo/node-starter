const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  },
};


// Product.create({
//   title: 'Guitarra Fender Stratocaster',
//   description: 'guitarra americana de 1980',
//   url: 'https://br.pinterest.com/pin/822258844453825780/',
// });
