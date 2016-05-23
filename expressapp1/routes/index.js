var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  if (req.cookies['sessone']) {
    if (req.cookies['sessone']=='123') {
      request({uri: 'http://app-two.internaldomain.com:3001/', headers: req.headers}).pipe(res);
      //req.pipe(request('http://app-two.internaldomain.com:3001/')).pipe(res);
    } else {
      res.render('index', { title: 'App One', cookies: req.cookies });
    }
  } else {
    res.redirect('/login?destination='+req.path);
  }
});

router.get('/login', function(req, res, next) {
  res.cookie('sessone', '123', { domain: '.externaldomain.com'});
  res.render('login', { title: 'App One Login', cookies: req.cookies, destination: req.query.destination });
});

module.exports = router;
