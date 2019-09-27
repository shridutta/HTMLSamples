
var express = require('express');
var app = express();
var reload = require('reload')
var router = express.Router()

app.get('/', function(req, res){
   res.send("Hello World! ");
});

app.listen(9000);
