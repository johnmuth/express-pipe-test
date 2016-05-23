var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();


router.get('/', function(req, res, next) {
  if (req.cookies['sesstwo']=='456beta2') {
    res.render('index', { title: 'App Two', cookies: req.cookies, headers: req.headers });
  } else {
    res.redirect('/login?destination='+req.path);
  }
});

router.get('/login', function(req, res, next) {
  res.cookie('sesstwo', '456beta2', { domain: '.externaldomain.com'});
  res.render('login', { title: 'App Two Login', cookies: req.cookies, destination: req.query.destination });
});

module.exports = router;
