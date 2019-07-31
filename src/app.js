"use strict"

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


const app = express();
const router = express.Router();

//Connection with database
const URL_CONNECT = "mongodb+srv://lucas:lucassousa@tranningapi-hbqnj.mongodb.net/dbmoved?retryWrites=true"
mongoose.connect(URL_CONNECT);

//Models

//AQUI VEM AS MODEL

//Get Routes

const indexRoutes = require("./routes/index");

//AQUI VEM AS ROUTES



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoutes);





module.exports = app;
