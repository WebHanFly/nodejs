var express = require('express');
var router = express.Router();

/* GET home page. */
<<<<<<< HEAD
router.get('/', function(req, res, next) {
=======
router.get('/index', function(req, res, next) {
  res.type('html');
>>>>>>> new
  res.render('index', { title: 'Express' });
});

module.exports = router;
