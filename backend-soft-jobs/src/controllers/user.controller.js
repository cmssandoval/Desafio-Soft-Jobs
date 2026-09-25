const create = ( req, res ) => {
    return res.status(500).json({ message: 'Not implemented.' });
};

const login = ( req, res ) => {
    return res.status(500).json({ message: 'Not implemented.' });
};

const read = ( req, res ) => {
    return res.status(500).json({ message: 'Not implemented.' });
};

const userController = {
    create,
    login,
    read,
};

export default userController;