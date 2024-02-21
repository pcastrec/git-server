const BenUtils = require('../utils/BenUtils');

// The function name should represent it's use case and what it does (get..., create..., get...WithId, ...)
function getNomText(req, res) {
    res.send(BenUtils.getNom());
}

module.exports = {
    getNomText
};