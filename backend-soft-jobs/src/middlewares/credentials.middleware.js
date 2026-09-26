const credentialsMiddleware = ( route ) => ( req, res, next ) => {

    const credentialTypes = {
        register: [ 'email', 'password', 'rol', 'lenguage'],
        login: [ 'email', 'password'],
    };

    const credentials = ( route === 'register')
    ? credentialTypes.register
    : credentialTypes.login;

    if ( !req.body ) {
        const missingCredentials = credentials;
        const error = new Error(`Missing credentials: ${missingCredentials.join(', ')}`);
        error.status = 400;
        return next(error);
    }

    const missingCredentials = credentials.filter( credential => !req.body[credential] );

    if ( missingCredentials.length ) {
        const error = new Error(`Missing credentials: ${missingCredentials.join(', ')}`);
        error.status = 400;
        return next(error);
    }

    return next();
};

export default credentialsMiddleware;