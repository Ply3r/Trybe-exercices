const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router
  .route('/products')
  .get(async (_req, res) => {
    const products = await ProductModel.getAll();

    if (products.error)
      return res.status(products.error.status).json(products);

    res
      .status(200)
      .json({ products });
  });

router
  .route('/products/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel.getById(id);

    if (product.error)
      return res.status(product.error.status).json(product);

    res
      .status(200)
      .json({ product });
  })
  .post(async (req, res) => {
    const { name, brand } = req.body;
    const newProduct = await ProductModel.add(name, brand);

    if (newProduct.error)
      return res.status(newProduct.error.status).json(newProduct);

    res
      .status(201)
      .json({ message: "OK", newProduct });
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const products = await ProductModel.exclude(id);

    if (products.error)
      return res.status(products.error.status).json(products);

    res
      .status(200)
      .json({ message: "OK", products });
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { name, brand } = req.body;
    const products = await ProductModel.update(id, name, brand);

    if (products.error)
      return res.status(products.error.status).json(products);

    res
      .status(200)
      .json({ message: "OK", products });
  });

module.exports = router;
