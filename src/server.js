const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.send('Faaaala Viaaad');
});

app.listen(3333);
