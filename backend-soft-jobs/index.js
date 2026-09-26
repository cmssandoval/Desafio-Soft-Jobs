import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import actualDateAndTime from './src/utils/actualDateAndTime.js';

import userRoute from './src/routes/user.route.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', userRoute);

const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {
    console.log(`Server is ON at http://localhost:${PORT}/`);
});

//! Create asyncHandler, errorHandler middlewares.
app.get('/', ( req, res ) => {
    return res.status(200).json({
        status: 'online',
        message: 'API soft-jobs is currently working!',
        time: actualDateAndTime,
    });
});