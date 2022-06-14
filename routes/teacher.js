var express = require('express');
var router = express.Router();


router.post('/data', function(req, res, next) {
  console.log(req.body)
  console.log(req.query.lname)

  res.render('index', { title: req.body.fname });
});

router.get('/data', function(req, res, next) {
  console.log(req.query)
  
  res.render('index', { title: req.query.fname });
});

router.get('/:da-:ta-:ch', function(req, res, next) {
    console.log(req.params )
  
    res.render('teacher', { title: req.params.da,name1:req.params.ta,verb:req.params.ch});

  });

router.get('/:da-:ta', function(req, res, next) {
    console.log(req.params.da)
  
    res.render('teacher', { title: req.params.da,name1:req.params.ta});
  });

router.get('/:da', function(req, res, next) {
    console.log(req.params.da)
 
    res.render('teacher', { title: req.params.da});
  });




module.exports = router;