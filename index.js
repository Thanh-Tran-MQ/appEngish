const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const db = require('./model/configdb');
const users = require('./Router/user');
const ShowErr = require('./controllers/error');

//connect mongodb
db.connect();


const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));    
app.use(express.json()); 
app.use(logger('dev'));


app.use('/', users);

app.use(ShowErr.error);
app.use(ShowErr.err)





app.listen(PORT, () =>{console.log(`server is runing on port:${PORT}`)})