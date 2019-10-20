const express = require('express');

const router = express.Router();
const User = require('../models/user')

router.get('/',(req,res,next)=>{
    User.find()
    .then(user=> res.json(user))
    .catch(err => res.status(400).json("Error" + err));
})

router.post('/adduser', (req,res,next)=>{
    const name = req.body.name;
    const newUser = new User({name});
    newUser.save()
        .then((user)=>{
            res.json("New user added")
        })
        .catch(err => res.status(400).json('Error' + err));
})
module.exports=router;