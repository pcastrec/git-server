// nameRoute.js
const express = require("express");
const router = express.Router();
const nameController = require("./nameController");

// Définir la route
router.get("/name", nameController.getName);

module.exports = router;
