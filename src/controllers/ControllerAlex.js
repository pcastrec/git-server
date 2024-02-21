const UtilsAlex = require('../utils/UtilsAlex');

// The function name should represent it's use case and what it does (get..., create..., get...WithId, ...)
function getExampleText(req, res) {
    res.send(UtilsAlex.getExample());
}

module.exports = {
    getExampleText
};