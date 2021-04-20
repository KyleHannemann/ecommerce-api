const express = require('express');
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`server on port ${port}`);
})

app.get('/api/products', getProducts)
app.get(`/api/products/:id`, getProduct )