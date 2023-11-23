const express = require("express");
const productosController = require("controllerProductos.js");
const router = express.Router();

//En ./controllers/productosController.js
const controller = {
  mostrarTodos: (req, res) => {},
  mostrarPorId: (req, res) => {},
  crearProducto: (req, res) => {},
};

module.exports = controller;

//En ./routes/productos.js
router.get("/", productosController.mostrarTodos);
router.get("/:id", productosController.mostrarPorId);
router.get("/crear", productosController.crearProducto);
