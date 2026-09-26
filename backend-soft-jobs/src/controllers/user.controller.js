import 'dotenv/config';
import jwt from 'jsonwebtoken';

import userModel from "../models/user.model.js";
import asyncHandler from '../utils/asyncHandler.js';

const JWT_SECRET = process.env.JWT_SECRET;

const create = asyncHandler(async ( req, res ) => {
    const { email, password, rol, lenguage } = req.body;
    const userRegistered = await userModel.addUser({ email, password, rol, lenguage });
    return res.status(201).json({ userRegistered });
});

const login = asyncHandler(async ( req, res ) => {
    const { email, password } = req.body;
    const validUser = await userModel.validateUser({ email, password });
    
    const token = jwt.sign( validUser, JWT_SECRET );
    
    return res.status(200).json({ token });
});

const read = asyncHandler(async ( req, res ) => {
    const user = await userModel.readUserByEmail( req.user );
    return res.status(200).json( user );
});

const userController = {
    create,
    login,
    read,
};

export default userController;