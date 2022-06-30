var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('calculator');
  });

  router.post('/add', function(req, res) {
    var a= parseInt(req.body.num1);
    var b= parseInt(req.body.num2);
    var result=a+b;
    res.render('calculator',{result});
  });

  router.post('/multi', function(req, res) {
    var a= parseInt(req.body.num1);
    var b= parseInt(req.body.num2);
    var result=a*b;
    res.render('calculator',{result});
  });

  router.post('/sub', function(req, res) {
    var a= parseInt(req.body.num1);
    var b= parseInt(req.body.num2);
    var result=a-b;
    res.render('calculator',{result}); 
  });



module.exports = router;