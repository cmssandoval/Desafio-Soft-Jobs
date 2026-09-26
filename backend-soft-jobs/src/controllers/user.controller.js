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
        
        return res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });        
    }
};

const read = async ( req, res ) => {
    try {
        const user = await userModel.readUserByEmail( req.user );
        return res.status(200).json( user );
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });        
    }
};

const userController = {
    create,
    login,
    read,
};

export default userController;