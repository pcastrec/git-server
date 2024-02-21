function AlexMiddleware(req, res, next) {
    console.log('Alex log');
    next();
}

module.exports = AlexMiddleware
