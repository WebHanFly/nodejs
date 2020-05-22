var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var path = require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/login',(req,res)=>{
    console.log(req.body,req.query,1111)
    res.send({err : 1,data : req.query,method : 'get'});
})
app.post('/reg',(req,res)=>{
    res.send({err : 1,data : req.body,method : 'post'});
})

app.listen(3000,()=>{
    console.log('server start');
})