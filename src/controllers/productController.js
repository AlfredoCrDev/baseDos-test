const Product = require('../models/products.model');

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
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
      const productId = await Product.findOne( {_id: req.params.id} );
      if (!productId) {
        return res.status(404).send('Product not found');
      }
      
      await Product.findByIdAndUpdate(productId, req.body);
      res.status(200).send({ message: 'Product updated'});
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).send('Server error');
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;

      const result = await Product.deleteOne({ _id: productId });

      if (result.deletedCount === 0) {
        console.log("Product not found");
        return res.status(404).send('Product not found');
      }

      res.status(200).send('Product deleted');
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).send('Server error');
    }
  }
};