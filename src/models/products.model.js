const mongoose         = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const productCollecion = "products"

const productSchema = new mongoose.Schema({
  title: {type: String, max: 30, required: true},
  description: {type: String, max: 60},
  price: {type: Number, required: true},
  brand: {type: String, max: 15, required: true},
})

productSchema.plugin(mongoosePaginate);

const productModel = mongoose.model(productCollecion, productSchema)

module.exports = productModel