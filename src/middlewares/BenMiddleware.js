function BenMiddleware(req, res, next) {
    console.log('Nom log');
    next();
}

module.exports = ExampleMiddleware