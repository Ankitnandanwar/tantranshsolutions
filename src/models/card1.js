const mongoose = require('mongoose')

const Card1Schema = mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   phone:{
    type:Number,
    required:true
   },
   position:{
    type:String,
    required:true
   },
   message:{
    type:String,
    required:true
   },
//    File:{
//     type:String,
//     required:true
//    }
   
})

const Icon = new mongoose.model("Card1", Card1Schema)

module.exports = Icon