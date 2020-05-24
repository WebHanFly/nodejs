var express = require('express');
var app = express();
const da = require('./db/connect')
var http = require('http');
var fs = require('fs');
var path = require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');


const userRouter = require('./db/router/user');
app.use('/user',userRouter);

app.listen(80,()=>{
    console.log('server start');
})