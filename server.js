//1. Import Express
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const  port = process.env.PS_PORT;
const db=require('./config/mongoose.js');
// import  QuestionRouter from './src/features/questions/question.routes.js';

// 2.Create Server
const server =  express();

// encoding decoding middleware
server.use(express.json());
server.use(express.urlencoded());
server.use(cookieParser());

// Default request hander
server.get('/',(req,res)=>{
    res.send("Welcome to Polling Sysrem API");
});

// 3.setting up different routing file
server.use('/',require('./routes/index'));  

// 4. Specify the port
server.listen(port, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`Server is running at port ${port}`);
})


