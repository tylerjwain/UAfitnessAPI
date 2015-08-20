
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var routes = require('./config/routes');

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client"));
app.use(routes);

var port = 8000;

app.listen(port, function() {
  console.log('Under Armour API in action, on port ' + port);
})