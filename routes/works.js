var express = require('express');
var router = express.Router();
const Works = require('../db/model/worksModel');


router.post('/Workspush',(req,res)=>{
    let {author , imgurl , visitNumb,tags,date,title,info,lovecunt,url} = req.body;
    Works.insertMany({
        author : author,
        imgurl :imgurl,
        visitNumb : visitNumb,
        tags : tags,
        date : date,
        title : title,
        info : info,
        lovecunt : lovecunt,
        url : url,
    }).then(()=>{
        res.send({err : 0 ,msg :  '加入OK'})
    }).catch((err)=>{
        res.send({err : -1 , msg : err});
    })
})

router.post('/Worksget',(req,res)=>{
  Works.find().then((result)=>{
      res.send({err : 1 , msg : '查询OK',data : result})      
   }).catch((err)=>{
      res.send({err : 1 , msg : '查询fail',data : err})      
   })
})

/* GET users listing. */
router.post('/Worksdelete', function(req, res, next) {
  let {title} = req.body;
  Works.remove({title : title}).then(()=>{
    res.send({err : 0 ,msg :  '删除成功'})
  }).catch((err)=>{
    res.send({err : -1 , msg : err});
  })
});

router.post('/Worksfixed', function(req, res, next) {
    let {_id,author , imgurl , visitNumb,tags,date,title,info,lovecunt,url} = req.body;
    Works.findOneAndUpdate({_id : _id},{
        author : author,
        imgurl :imgurl,
        visitNumb : visitNumb,
        tags : tags,
        date : date,
        title : title,
        info : info,
        lovecunt : lovecunt,
        url : url
    }).then(()=>{
      res.send({err : 0 ,msg :  '更新成功'})
    }).catch((err)=>{
      res.send({err : -1 , msg : err});
    })
  });

  /* GET users listing. */
router.get('/:id', function(req, res, next) {
  let {id} = req.params;
  res.type('html')
  res.render('works', { title: 'Express' });
});


module.exports = router;
