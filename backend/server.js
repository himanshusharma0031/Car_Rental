import express from 'express';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDb from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import carRoutes from './routes/carRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

//dotenv
dotenv.config();

//database
connectDb();

const app = express();
//middelewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/car',carRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/booking', bookingRoutes);
app.get('/', (req, res) => {
    res.status(200).send("<h1>Welcome to the Car Rental API</h1>");
});

//port
const PORT = process.env.PORT || 8000;

//start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



