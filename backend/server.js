const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { db } = require("./db");
const app = express();
const {readdirSync} = require('fs')
const contact = require("../backend/routes/contactRoutes")
const ContactSchema = require('../backend/models/contactModel')

require("dotenv").config()
const PORT = process.env.PORT
 
//middleware  
app.use(cors(corsOptions))
app.use(express.json())
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}))

//routes
readdirSync('./routes').map((route)=>app.use('/api',require('./routes/'+route)))
//  app.use('/api/',contact)
var corsOptions = {
    origin:"http://localhost:3000"
}



const server =()=>{
    db()
    app.listen(PORT,()=>{
        console.log("listening to port",PORT);
    })
    app.on('error',console.error.bind(console,"MongoDB connection error"))
}

app.get("/",(req,res)=>{
    res.json({message:"Welcome to world-wide contact lists"})
})

server()