"use strict"

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


const app = express();
const router = express.Router();

//Connection with database
// const URL_CONNECT = "mongodb+srv://lucas:lucassousa@tranningapi-hbqnj.mongodb.net/dbmoved?retryWrites=true"
// mongoose.connect(URL_CONNECT);

const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: 30, // Retry up to 30 times
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  }

const connectWithRetry = () => {
  mongoose.connect(URL_CONNECT, options).then(()=>{
    console.log('MongoDB is connected')
  }).catch(err=>{
    console.log('MongoDB FALHA AO SE CONECTAR, retry after 5 seconds.')
    setTimeout(connectWithRetry, 5000)
  })
}

connectWithRetry()


//Models

//AQUI VEM AS MODEL

const students = require("./models/students")


//Get Routes

const indexRoutes = require("./routes/index");

//AQUI VEM AS ROUTES
const registerRoutes = require("./routes/register")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoutes);
app.use("/register",registerRoutes)



module.exports = app;
