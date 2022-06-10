 var express = require('express');
 var router = express.Router();
 
 var mysql = require('mysql');
 const { getloginPost } = require('../controller/controller');
 const func = require('../model/login');

 var con = mysql.createConnection({
    host: "192.168.14.1",
    user: "root",
    password: "1234",
    database: "app_db"
 });


 router.get('/', function (req, res, next){
    console.log("abc");
    con.connect(function(err){
        console.log("def");
        if (err) console.log("err");
        console.log("connected");
    })
    console.log("ABC")
    console.log("DEF")
    res.render('login')
 });
 
 router.get('/getLogin', function(req, res, next){
    console.log(req.query)
    res.json({"Name": req})
 });

 router.post('/getLogin', function(req, res, next){
    getloginPost(req, res, next)
 });

 router.all('/getPost', function(req, res, next){
    console.log(req.body)
    if(req.body){
        //do something
    }
    else{
        //do something else
    }

 console.log(req.body.pass)
 res.json({"Name": req.body})
});

module.exports = router;
