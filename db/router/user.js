const express = require('express');
const router = express.Router();
const User = require('../model/userModel');


router.post('/reg',(req,res)=>{
    let {name , age , sex} = req.body;
    User.insertMany({
        name : name,
        sex :sex,
        age : age
    }).then(()=>{
        res.send({err : 0 ,msg :  '注册OK'})
    }).catch((err)=>{
        res.send({err : -1 , msg : err});
    })
})

module.exports = router;