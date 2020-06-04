var express = require('express');
var router = express.Router();
const User = require('../db/model/userModel');


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

router.post('/login',(req,res)=>{
  let {name , age , sex} = req.body;
  console.log(name)
  User.find({
    name : name,
    // sex :sex,
    // age : age
   }).then((result)=>{
      res.send({err : 1 , msg : '查询OK',data : result})      
   }).catch((err)=>{
      res.send({err : 1 , msg : '查询fail',data : err})      
   })
})

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let {id} = req.params;
  res.type('html')
  res.render('user', { title: 'Express' });
});


module.exports = router;
