var express = require('express');
var router = express.Router();
var data = require('../data.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ title:"express"});
});

router.get('/login',function(req,res,next) {
  res.render('login');
})

router.post('/list',function(req,res,next) {
  if(req.body.username == data.users[0].username && req.body.password == data.users[0].password) {
    res.render('list',{data})
  }
  else {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.end('用户名或密码错误');
  }
})

module.exports = router;
