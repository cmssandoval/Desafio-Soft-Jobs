import 'dotenv/config';
import jwt from 'jsonwebtoken';
import userModel from "../models/user.model.js";

const JWT_SECRET = process.env.JWT_SECRET;

const create = async ( req, res ) => {
    try {
        const { email, password, rol, lenguage } = req.body;
        const userRegistered = await userModel.addUser({ email, password, rol, lenguage });
        return res.status(201).json({ userRegistered });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });        
    }
};

const login = async ( req, res ) => {
    try {
        const { email, password } = req.body;
        const validUser = await userModel.validateUser({ email, password });
        
        const token = jwt.sign( validUser, JWT_SECRET );
        
        return res.status(201).json({ token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });        
    }
};

const read = async ( req, res ) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if ( !token ) return res.status(401).json({ message: 'No token provided' });

        jwt.verify( token, JWT_SECRET );
        // Decode es innecesario, lo agrego solo por los requerimientos del desafío.
        // Verify ya devuelve el payload decodificado en caso de que su firma sea legítima.
        const payload = jwt.decode( token );

        const user = await userModel.readUserByEmail({ payload });

        return res.status(200).json( user );
    } catch (error) {
        console.log(error);
        if ( error.name === 'JsonWebTokenError' ) return res.status(500).json({ message: 'Invalid token' });      
        return res.status(500).json({ message: 'Internal server error' });        
    }
};

const userController = {
    create,
    login,
    read,
};

export default userController;