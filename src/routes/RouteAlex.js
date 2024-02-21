const { Router } = require('express');
const ControllerAlex = require('../controllers/ControllerAlex');
const AlexMiddleware = require('../middlewares/MiddlewareAlex');

const router = Router();

// Each routes links to a controller function, and can use some middlewares
router.get('/alex', AlexMiddleware, ControllerAlex.getExampleText);

module.exports = router;