var express = require('express');
const app = require('../app');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render("register",{})
})
router.get('/', function(req,res,next){
    res.redirect('/table')
})
module.exports = router;