const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req, res) => {
  res.send('Hola desde express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola desde la ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'product 1',
      price: 1000,
    },
    {
      name: 'product 2',
      price: 2000,
    },
  ]);
});


app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;

  res.json([
    {
      categoryId,
      productId

    },

  ]);
});

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'product 2',
    price: 2000,
  })
})

app.listen(port, () => {
  console.log('corrio el server');
});



