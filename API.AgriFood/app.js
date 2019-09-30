
const express = require('express');
const app = express();
const port = 9000;
var router = express.Router();
var bodyParser  = require('body-parser');
var cookieParser = require('cookie-parser');
var mysql = require('mysql'), async = require('async')

var PRODUCTION_DB = 'app_prod_database'
  , TEST_DB = 'app_test_database'

exports.MODE_TEST = 'mode_test'
exports.MODE_PRODUCTION = 'mode_production'

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_user',
  password: 'some_secret',
  database: 'the_app_database'
});

var state = {
   pool: null,
   mode: null,
 }
 
 exports.connect = function(mode, done) {
   state.pool = mysql.createPool({
     host: 'localhost',
     user: 'your_user',
     password: 'some_secret',
     database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
   })
 
   state.mode = mode
   done()
 }
 
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

// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'dbuser',
//   password: 's3kreee7',
//   database: 'my_db'
// })

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()