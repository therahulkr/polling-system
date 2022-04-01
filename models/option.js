const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
     text : {
         type : String,
         required : true
     },
     parent : {
        type : mongoose.Schema.ObjectId,
        ref : 'question',
        required : true,
     },
     votes : {
         type : Number,
         default : 0,
     },
     voteLink : {
         type : String
     }
})

module.exports = mongoose.model('option',optionSchema);