const express = require('express')
const router = new express.Router()
const ContactDetails = require("../models/contactdetails.js");
const url = require('url')


// create a new user
router.post('/contactdetails', async (req, res) => {
    try{
        const user =new ContactDetails(req.body)
        // console.log(user)
        const UserContactDet = await user.save();
        res.status(201).send(UserContactDet)
    }catch(e){
        return res.status(400).send(e)
    }
})


// Read the user details
router.get('/contactdetails', async (req,res)=>{ 
    try {
      const GetContactDet = await ContactDetails.find()
      res.status(200).send(GetContactDet)
    } catch (error) {
      res.status(404).send(error)
    }  
  })

module.exports = router;

