const Product = require('../models/products.model');

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).send('Server error');
    }
  },

  addProduct: async (req, res) => {
    const { title, description, price, brand } = req.body;

    if(!title || !price || !brand){
        return res.status(400).send({ message : "Title, Price and Brand are required"})
    }

    try {
      const newProduct = new Product({title, price, brand, description});
      await newProduct.save();
      console.log("Product added");
      res.status(201).json({ status: 'success', message: "Product added", data: newProduct });
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).send('Server error');
    }
  },
  
  updateProduct: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send('Product updated');
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).send('Server error');
    }
  }
};