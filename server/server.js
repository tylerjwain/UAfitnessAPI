
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

// require('./config/mongoose.js');
// require('./config/routes.js')(app);

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client"));

var port = 8000;

app.listen(port, function() {
  console.log('Under Armour API in action, on port ' + port);
})