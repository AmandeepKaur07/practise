var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const { getLoginPost } = require('../controller/controller');
const func = require('../model/login');

var con = mysql.createConnection({
  host: "easylearning.guru",
  user: "kcc_student",
  password: "Kccitm.edu.in1",
  database: "kccStudent"
});

con.connect()

router.get('/', function (req, res, next) {
  console.log("abc");
  con.connect(function (err) {
    console.log("def")
    if (err) console.log("err");
    console.log("Connected!");
  });
  
  console.log("ghi")
  console.log("jkl")
  console.log("nmp")
  res.render('login')
});

router.get('/getLogin', function (req, res, next) {


  con.query("select * from form", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.render('login', { "data": result })
  });

});

router.post('/updateLogin', function (req, res, next) {
  console.log(req.body)
  res.json({ "Name": "Hello" })
});

router.post('/deleteLogin', function (req, res, next) {
  console.log(req.body.id)
  // res.json({ "Name": "Hello" })
  con.query("DELETE FROM form where id ="+req.body.id, function (err, result) {
    if (err) res.json({code:0});
    console.log(result);
    res.json({code:1})
  });
});

router.post('/getLogin', function (req, res, next) {
  getLoginPost(req, res, next)
});

router.all('/getPost', function (req, res, next) {
  console.log(req.body)
  if (req.body) {
    //do something
  } else {
    //do something else
  }
  console.log(req.body.pass)
  res.json({ "Name": req.body })
});

module.exports = router;