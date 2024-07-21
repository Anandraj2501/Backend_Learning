import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";
const app = express();

const connect_db = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("Error Connecting to db")
        })

        app.listen(process.env.PORT,()=>{
            console.log("App is Listening on port :",process.env.PORT);
        })
    } catch (error) {
        console.error("Error :",error)
    }
}
export default connect_db;