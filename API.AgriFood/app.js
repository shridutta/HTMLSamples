
const express = require('express');
const app = express();
const port = 9000;
var cors = require('cors');
var router = express.Router();
var bodyParser  = require('body-parser');

app.get('/', function(req, res){
   res.send("Welcome to AgriFoods ");
});

app.get('/login', function(req, res){
   res.send("Please provide username and password! ");
});


app.get('/login/:userName/:pwd', function(req, res){
   res.send("Welcome "+req.params.userName+" Your password is "
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