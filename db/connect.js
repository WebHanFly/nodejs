var mongoose = require('mongoose');
let url = 'mongodb://127.0.0.1:27017/project'
mongoose.connect(url,{
  user : 'root',
  pass : 'liuxiaoma123',
  useUnifiedTopology: true,
  useNewUrlParser: true
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('local connected!')
});