const { Router } = require("express");
const ExampleController = require("../controllers/ExampleController");
const ExampleMiddleware = require("../middlewares/ExampleMiddlewares");

const router = Router();

// Each routes links to a controller function, and can use some middlewares
router.get("/", ExampleMiddleware, ExampleController.getExampleText);
router.get("/", ExampleMiddleware, ExampleController.getExampleNom);
router.get("/", ExampleMiddleware, ExampleController.getExamplePrenom);

module.exports = router;
