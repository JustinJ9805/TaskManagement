import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'


// import mongodb from 'mongodb'
// const mongoClient = mongodb;

import { userData, projectData, taskData, updateData } from './data/data.js';


//data imports
import Project from './models/projects.js'
import Task from './models/tasks.js'
import Update from './models/updates.js'
import User from './models/users.js'


//ROUTER - cant use until defined and exported
import projectRoutes from './routes/projects.js'
import taskRoutes from './routes/tasks.js'
import userRoutes from './routes/users.js'
import updateRoutes from './routes/updates.js'


//CONFIG
dotenv.config();
const app = express()
const PORT = process.env.PORT || 9000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(helmet())
app.use(morgan('common'))
app.use(cors())
app.use(express.json());

app.use('/project', projectRoutes);
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/updates', updateRoutes);

app.get("/", async (req,res) => {
    return res.json({message: "Hello, World"});
});

const start = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL,
            {useNewUrlParser: true}
        ).then (() => 
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)))
            //inserting data into mongo 
            //User.insertMany(userData); 
            //Project.insertMany(projectData);
            //Task.insertMany(taskData);
            //Update.insertMany(updateData);
            
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

start();