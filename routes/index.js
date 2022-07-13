
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "easylearning.guru",
  user: "kcc_student",
  password: "Kccitm.edu.in1",
  database: "kccStudent"
});


router.get('/', function(req, res, next) {
   
    res.render('register')
});

router.post('/', function(req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO `book_entry` (`bname`, `ncopy`,`aname`) \
    VALUES ('"+req.body.bname+"', '"+req.body.copies+"','"+req.body.author+"');"
    con.getConnection(function (err, connection) {
      connection.query(sql, function (err, result) {
        
        console.log(result);
        res.redirect('/table');
      });
    });
  });
  module.exports = router;