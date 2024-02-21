const ExampleUtils = require('../utils/ExampleUtils');

// The function name should represent it's use case and what it does (get..., create..., get...WithId, ...)
function getExampleText(req, res) {
    res.send(ExampleUtils.getExample());
}



function getNomPrenom (req, res) {
    const nom = 'Morin';
    const prenom = 'Marvin';
    const nomComplet = `${prenom} ${nom}`;
    res.send(`Nom et prénom : ${nomComplet}`);
  };

  


module.exports = {
    getExampleText,
    getNomPrenom
};