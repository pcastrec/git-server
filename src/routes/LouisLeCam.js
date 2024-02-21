const { Router } = require('express');
const LouisLeCamController = require('../controllers/LouisLeCam');

const router = Router();

// Each routes links to a controller function, and can use some middlewares
router.get('/', LouisLeCamController.getName);

module.exports = router;
