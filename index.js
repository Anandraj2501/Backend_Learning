require('dotenv').config();
const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/login',(req,res)=>{
    res.send("hello login");
})

app.listen(process.env.PORT,()=>{
    console.log(`Listening to port ${process.env.PORT}`);
})