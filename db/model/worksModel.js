var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sorkschema = new Schema({
  author:  String,
  imgurl: String,
  visitNumb:   String,
  tags:   String,
  date:   String,
  title : String,
  info : String,
  lovecunt : Number,
  url : String,
});

var Works = mongoose.model('works', sorkschema);


module.exports = Works;