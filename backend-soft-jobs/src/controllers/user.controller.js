import 'dotenv/config';
import jwt from 'jsonwebtoken';
import userModel from "../models/user.model.js";

const JWT_SECRET = process.env.JWT_SECRET;

const create = async ( req, res ) => {
    try {
        const { email, password, rol, lenguage } = req.body;
        const userRegistered = await userModel.addUser({ email, password, rol, lenguage });
        return res.status(201).json({
            message: 'User registered successfully',
            user: userRegistered,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error',
            data: error,
        });        
    }
};

const login = async ( req, res ) => {
    try {
        const { email, password } = req.body;
        const validUser = await userModel.validateUser({ email, password });
        
        const token = jwt.sign( validUser, JWT_SECRET );
        
        return res.status(201).json({
            message: 'User loged successfully',
            token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });        
    }
};

const read = async ( req, res ) => {
    try {
        const { email } = req.body;
        const user = await userModel.readUserByEmail({ email });
        return res.status(500).json({ message: 'Not implemented.' });
    } catch (error) {
        return res.status(500).json({ message: 'Not implemented.' });        
    }
};

const userController = {
    create,
    login,
    read,
};

export default userController;