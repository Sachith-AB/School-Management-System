import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors'
import studentRoutes from './routes/student.route.js'

dotenv.config();

const app=express();
const PORT = process.env.PORT || '4000';

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONOGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log('MongoDB is connected');
});

app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`)
})

app.use('/api/student',studentRoutes);

