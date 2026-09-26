import pool from '../database/connection.js';
import bcrypt from 'bcrypt';

const SALT_OR_ROUNDS = 10;

const readUserByEmail = async ({ email }) => {
    try {
        return;
    } catch (error) {
        throw error;
    }
};

const addUser = async ({ email, password }) => {
    try {
        return;
    } catch (error) {
        throw error;
    }
};

const validateUser = async ({ email, password }) => {
    try {
        return;
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