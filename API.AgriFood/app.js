
const express = require('express');
const app = express();
const port = 9000;
var router = express.Router()


app.get('/', function(req, res){
   res.send("Hello ! ");
});

app.listen(port, () => console.log('API Server is running on localhost: ${this.port}'));
app.get('/login', function(req, res){
   res.send("Hello from login! ");
});
