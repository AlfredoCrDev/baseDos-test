const chai = require("chai");
const { expect } = chai;
const supertest = require('supertest');
const app = require('../src/server.js');
const request = supertest(app);

describe('Router de Productos', () => {
  it('Debería obtener la lista de productos', async () => {
    const response = await request.get('/products/')
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body).to.have.length.above(0);
    expect(response.body[0]).to.have.property('price');
  });

  it('Debería dar error por faltar propiedades obligatorias y devolver un código 400', async () => {
    const nuevoProducto = {
      title: 'Nuevo Producto',
      description: 'Descripción del nuevo producto',
      brand: "Marca Producto Nuevo",
    };

    const response = await request.post('/products/').send(nuevoProducto);
    expect(response.status).to.equal(400);
    expect(response.body.message).to.contain(`Title, Price and Brand are required`);
  });

  it('Debería actualizar un producto existente y devolver un código 200', async () => {
    productId = "664222d65579cfbf85af9ef6"
    const productoActualizado = {
      price: 1800001,
    };

    const response = await request.put(`/products/${productId}`).send(productoActualizado);
    expect(response.status).to.equal(200); 
    expect(response._body.message).to.contain(`Product updated`);
  });
});