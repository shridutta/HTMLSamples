
const express = require('express');
const app = express();
const port = 9000;
var cors = require('cors');
var router = express.Router();
var bodyParser  = require('body-parser');
var mysql      = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : 'Welcome123', //mysql database password
  database : 'AgriFoods' //mysql database name
});


connection.connect(function(err) {
     if (err) throw err
     console.log('You are now connected with mysql database...')
   });

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(port,  "127.0.0.1", function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});

app.get('/', function(req, res){
   res.send("Welcome to AgriFoods ");
});

app.get('/login', function(req, res){
   res.send("Please provide username and password! ");
});


app.get('/login/:userName/:pwd', function(req, res){
   // res.send("Welcome "+req.params.userName+" Your password is "
   // +req.params.pwd
   // );
   var query = 'select * from users where userName=\''+req.params.userName + '\' AND PASSWORD = \'' +req.params.pwd +'\' AND isActive =1';
   console.log(query);
   connection.query(query, function (error, results, fields) {
         if (error ) 
         {
            console.log(error);
            throw error;
         }
         console.log(results);
         if(results.length == 0)
              res.end(JSON.stringify('Invalid userName or Pwd'));
            else
             res.end(JSON.stringify(results));
   });

      
   //TODO: Get the Record from DB 
   // If found say welcome
   //else say invalid un pwd

});

//Other routes here
app.get('*', function(req, res){
   res.send('Sorry, please check the URL.');
});

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
