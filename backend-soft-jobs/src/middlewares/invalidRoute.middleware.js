const invalidRouteMiddleware = (req, res, next) => {
    const error = new Error(`The route ${req.originalUrl} does not exist`);
    error.status = 404;
    return next(error);
};

export default invalidRouteMiddleware;