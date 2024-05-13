const express  = require('express');
const app      = express();
const PORT     = process.env.PORT || 3001;
require('dotenv').config();


const connectDB = require("./config/db.js")

const productRoutes =  require("./routes/product.routes.js");

connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRoutes)

const server = app.listen(PORT, () => {
    console.log(`Servidor Corriendo en http://localhost:${PORT}`)
});

module.exports = server;