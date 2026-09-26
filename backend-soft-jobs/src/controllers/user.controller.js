import userModel from "../models/user.model.js";

const create = async ( req, res ) => {
    try {
        const { email, password } = req.body;
        const userAdded = await userModel.addUser({ email, password });
        return res.status(500).json({ message: 'Not implemented.' });
    } catch (error) {
        return res.status(500).json({ message: 'Not implemented.' });        
    }
};

const login = async ( req, res ) => {
    try {
        const { email, password } = req.body;
        const validUser = await userModel.validateUser({ email, password });
        return res.status(500).json({ message: 'Not implemented.' });
    } catch (error) {
        return res.status(500).json({ message: 'Not implemented.' });        
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