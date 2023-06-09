import express from 'express'
import mongoose from 'mongoose'
import  dotenv from 'dotenv'
dotenv.config()
import Route from './route.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use(Route)

const start = async()=>{
    mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to DB");
    app.listen(4000,()=>{
        console.log("Server running at port 4000");
    })
}
start()