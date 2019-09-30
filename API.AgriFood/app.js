
const express = require('express');
const app = express();
const port = 9000;
var router = express.Router();
var bodyParser  = require('body-parser');
var cookieParser = require('cookie-parser');


app.use(cookieParser())

//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json())

app.get('/login', function(req, res){
   res.send("Please provide username and password! ");
});

app.get('/', function(req, res){
   res.send("Welcome to AgriFoods ");
});

app.get('/login/:id/:pwd', function(req, res){
   res.send("Welcome "+req.params.id+" Your password is"
   +req.params.pwd
   );
});

//Other routes here
app.get('*', function(req, res){
   res.send('Sorry, please check the URL.');
});

app.listen(port, () => console.log('API Server is running on localhost: ${port}'));


app.use('/', function(req, res){
   console.log('End');
});

