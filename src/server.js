const express      = require('express');
const app          = express();
const PORT         = process.env.PORT || 3001;
const swaggerUi    = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc')

require('dotenv').config();


const connectDB = require("./config/db.js")

const productRoutes =  require("./routes/product.routes.js");

connectDB();

const swaggerOptions = {
    definition:{
        openapi: '3.0.1',
        info:{
            title:'Documentacion API',
            description: "Api clase swagger"
        }
    },
    apis: ['./src/docs/**/*.yaml']
}

const specs = swaggerJSDoc(swaggerOptions)

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRoutes)
app.use("/apidocs", swaggerUi.serve, swaggerUi.setup(specs))

const server = app.listen(PORT, () => {
    console.log(`Servidor Corriendo en http://localhost:${PORT}`)
});

module.exports = server;