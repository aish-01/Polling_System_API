const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.PS_DB;  //mongoose Url
mongoose.connect(url); //connecting to db

const db=mongoose.connection; // getting connection of db

db.on('error',console.error.bind(console,'Error:connecting to the db :: MongoDB')); //if error while connecting to the db

//once connection is open
db.once('open',(err)=>{
    if(err){
    console.log('Error while opening the db connection',err);
}else{  
    console.log('Successfully connected to the database');
}
}) 

module.exports = db;