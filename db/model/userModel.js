var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userchema = new Schema({
  name:  String,
  sex: String,
  age:   Number,
});

var User = mongoose.model('users', userchema);


module.exports = User;