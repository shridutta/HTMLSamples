
var express = require('express');
var app = express();
var router = express.Router()

app.get('/', function(req, res){
   res.send("Hello Worlds");
});

app.listen(9000);
