import pool from '../database/connection.js';
import bcrypt from 'bcrypt';

const SALT_OR_ROUNDS = 10;

const readUserByEmail = async ( user ) => {
    try {        
        const query = 'SELECT email, rol, lenguage FROM usuarios WHERE email = $1';
        const { rows } = await pool.query( query, [user] );
        return rows;
    } catch (error) {
        throw error;
    }
};

const addUser = async ({ email, password, rol, lenguage }) => {
    try {
        const { rows: [existingUser] } = await pool.query(
            'SELECT email FROM usuarios WHERE email = $1', [email]
        );
        
        if ( existingUser ) {
            const error = new Error(`User ${email} already exists`);
            error.status = 401;
            throw error;
        }

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
        if ( !user ) {
            const error = new Error(`User with email ${email} not found`);
            error.status = 404;
            throw error;
        }

        const isPasswordMatch = bcrypt.compareSync( password, user.password );
        if ( !isPasswordMatch ) {
            const error = new Error(`Invalid credentials`);
            error.status = 401;
            throw error;
        }

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