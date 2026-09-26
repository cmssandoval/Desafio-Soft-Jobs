import getDatabaseError from '../lib/errors/database.error.js';

const errorMiddleware = ( err, req, res, next ) => {
    console.log(err);

    if ( err.code ) {
        const { code, message } = getDatabaseError( err.code );
        return res.status(code).json({ message });
    }

    if ( err.name === 'JsonWebTokenError' ) {
        return res.status(401).json({ message: 'Invalid token' });
    };

    const status = err.status || 500;
    const message = ( status === 500 ) ? 'Internal Server Error' : err.message;    

    return res.status(status).json({ message });
};

export default errorMiddleware;