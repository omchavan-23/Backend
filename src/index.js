// require('dotenv').config({path : './env'})
import dotenv from 'dotenv';
dotenv.config({             //another way 
    path : './.env'
})

import connectDB from './db/index.js';  //method 2

import express from 'express'
const app = express();

//used for method 1
// import mongoose from 'mongoose';
// import {DB_NAME} from './constants';

// function connectDB(){}    --- you can use this approch also 
// connectDB()

/*using Iffi ----> Method - 1
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on('error',(err) => {
            console.log("Error : ",err);
            throw err           
        }),

        app.listen(process.env.PORT, () => {
            console.log(`App is listning on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR : ",error);
        throw err;
    }
})()*/


// Method - 2
// import connectDB from './db';

connectDB()