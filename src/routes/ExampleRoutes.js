const { Router } = require('express');
const ExampleController = require('../controllers/ExampleController');
const ExampleMiddleware = require('../middlewares/ExampleMiddlewares');
const BenController = require('../controllers/BenController');
const BenMiddleware = require('../middlewares/BenMiddleware');

const router = Router();

// Each routes links to a controller function, and can use some middlewares
router.get('/', ExampleMiddleware, ExampleController.getExampleText);
router.get('/nom', BenMiddleware, BenController.getNomText);

module.exports = router;