const express = require('express')
const router = new express.Router()
const Icon = require("../models/card1.js");
const url = require('url')

router.post('/post', async (req, res) => {
    try{
        const user =new Icon(req.body)
        // console.log(user)
        const createcard1 = await user.save();
        res.status(201).send(createcard1)
    }catch(e){
        return res.status(400).send(e)
    }
})

router.get('/get', async (req,res)=>{ 
    try {
      const GetCard1 = await Icon.find()
      res.status(200).send(GetCard1)
    } catch (error) {
      res.status(404).send(error)
    }  
  })

  module.exports = router;
