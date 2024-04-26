const mongoose = require('mongoose');

// Questions schema to hold title and options of that question

const questionSchema = new mongoose.Schema({
    title: {
        type:String,
        required : true,
        unique : true
    },
    options :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Option',
        required:true
    }]
},{timestamps: true});

const Question = mongoose.model('Question',questionSchema);

   
module.exports = Question;
