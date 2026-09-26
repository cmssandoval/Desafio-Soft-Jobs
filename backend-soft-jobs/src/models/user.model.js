import pool from '../database/connection.js';
import bcrypt from 'bcrypt';

const SALT_OR_ROUNDS = 10;

const readUserByEmail = async ({ payload }) => {
    try {        
        const query = 'SELECT email, rol, lenguage FROM usuarios WHERE email = $1';
        const { rows } = await pool.query( query, [payload] );
        return rows;
    } catch (error) {
        throw error;
    }
};

const addUser = async ({ email, password, rol, lenguage }) => {
    try {
        const query =
        `INSERT INTO usuarios (id, email, password, rol, lenguage)
        VALUES (DEFAULT, $1, $2, $3, $4) RETURNING email
        `;
        const encryptedPassword = bcrypt.hashSync( password, SALT_OR_ROUNDS );
        const values = [ email, encryptedPassword, rol, lenguage ];
        const { rows: [user] } = await pool.query( query, values );
        return user;
    } catch (error) {
        throw error;
    }
};

const validateUser = async ({ email, password }) => {
    try {
        const { rows: [user] } = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        if ( !user ) throw { message: 'User not found' };
        
        const isPasswordMatch = bcrypt.compareSync( password, user.password );
        if ( !isPasswordMatch ) throw { message: 'Invalid credentials' };
        
        return user.email;
    } catch (error) {
        throw error;
    }
};

const userModel = {
    readUserByEmail,
    addUser,
    validateUser,
};

export default userModel;