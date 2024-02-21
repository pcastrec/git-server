const ExampleUtils = require('../utils/ExampleUtils');

// The function name should represent it's use case and what it does (get..., create..., get...WithId, ...)
function getName(_req, res) {
  res.status(200).send("Louis Le Cam");
}

module.exports = {
  getExampleText
};
