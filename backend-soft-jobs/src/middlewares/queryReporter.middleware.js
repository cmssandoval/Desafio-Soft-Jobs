const queryReporter = ( req, res, next ) => {
    const timestamp = new Date().toISOString();
    const start = Date.now();

    res.on('finish', () => {
        console.log(JSON.stringify({
            timestamp,
            latency: `${Date.now() - start}ms`,
            origin: req.headers.origin,
            method: req.method,
            url: req.originalUrl,
            statusCode: res.statusCode
        }));
    });
    
    return next();
};

export default queryReporter;