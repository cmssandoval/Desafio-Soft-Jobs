import 'dotenv/config';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = ( req, res, next ) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if ( !token ) return res.status(401).json({ message: 'No token provided' });

        jwt.verify( token, JWT_SECRET );
        // Decode es innecesario, lo agrego solo por los requerimientos del desafío.
        // Verify ya devuelve el payload decodificado en caso de que su firma sea legítima.
        const payload = jwt.decode( token );
        req.user = payload;
        
        return next();
    } catch (error) {
        return next(error);
    }
};

export default authMiddleware;