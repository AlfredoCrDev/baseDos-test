# Backend / Prueba Tecnica Base Dos.

### ☑️ Dependencias:

- Node.js    
- Express.js   
- Mongoose  
  - mongoose-paginate-v2  
  - connect-mongo  
- Swagger-jsdoc
- Swagger-ui-express

### ☑️ devDependencias:

- Chai
- Mocha
- Supertest

### 💻 Instalación:  

1. Clonar el repositorio: 
```shell
git clone https://github.com/AlfredoCrDev/baseDos-test.git
```
2. Posicionarte en el directorio del proyecto.

```shell
cd /baseDos-test
```
3. Instalación de todas las dependencias con:
```shell
npm install
```

### ▶️ Uso
Para ejecutar la aplicación utiliza:
```shell
npm run dev 
```
### ▶️ Test
Para ejecutar la pruebas utiliza:
```shell
npm run test 
```
### 🌐 Servidor:

✅    Se levanta el servidor con *Express js*.

Aplicacion debe abrirse en el puerto: 

#### `http://localhost:8080`  

### 📖 Revision de la solución:
Para revisar la documentación de la API en Swagger UI:
[Swagger](http://localhost:8080/apidocs/)

### 🔀 Rutas:

📍   **Consulta Productos:** 

- ⚠️ GET `/products`: Obtiene la lista de productos.
- 📥 POST `/products`: Agrega un nuevo producto.
- 🔃 PUT `/:id` Actualiza un producto existente por su ID.
- ❌ DELETE `/product/:id`: Elimina un producto indicandole su ID.


### ⚙️ Funciones & Características:

✅ La API cuenta con un las 4 operaciones básicas CRUD que se pueden realizar en el sistema de gestion de datos.

- ➕ **addProduct:** Agregar un producto en el método POST, asignando un id de forma de que no se repita. Los productos tienen la siguiente estructura: 

```
{
    "title": "Producto 1",
    "description": "Descripción del Producto 1",
    "price": 1999,
    "brand": "brand1",
  }
  ** title, price y brand son obligatorio **
```
- **getAllProducts:** Permite visualizar con el método GET de http, los productos agregados previamente.  
- 🔁 **updateProduct:** Actualiza un producto que ya este agregado previamente, recibe como parametro el ID del mismo. 

- ❌ **deleteProduct:** También, recibiendo un ID como parametro, se elimina un producto. 

## 🔐 Licencia

Este proyecto está licenciado bajo la Licencia MIT. 


## 📱 Tegnologías

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)]()

[![Node.JS](https://img.shields.io/badge/Node.JS-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=101010)]()

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=101010)]()
