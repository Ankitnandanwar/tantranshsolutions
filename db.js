const express = require('express')
const mongoose = require('mongoose')
const card1 = require("./src/models/card1.js");
const router = require('./src/Router/card1router')
const ContactDetRouter =  require('./src/Router/contactdetailsrouter.js')

const app = express()

const port = 7500;

app.use(express.json());
app.use(router)
app.use(ContactDetRouter)

const connect = async () => {
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/Tantransh")
    console.log('connected')
  }
  catch{
     console.log('not connected')
  }
  
  };
  app.get("/", (req, res) => {
    res.send("Welcome to Tantransh solns");
  });


app.listen(port, () => {
connect();
console.log("Connection Successfull");
});