const mongoose = require('mongoose')

const ContactDet = mongoose.Schema({
   username:{type:String, required:true, unique:true},
   useremail:{type:String, required:true, unique:true},
   userphone:{type:Number, required:true},
   userproduct:{type:String, required:true},
   usermessage:{type:String,required:true}, 
})

const ContactDetails = new mongoose.model("ContactUser", ContactDet)

module.exports = ContactDetails