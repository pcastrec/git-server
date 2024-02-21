const { Router } = require('express');

const router = Router();

// Each routes links to a controller function, and can use some middlewares
router.get('/AmyMichot', (req, res) => {
    res.send('Amy Michot')
});

module.exports = router;