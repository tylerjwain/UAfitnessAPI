
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

// require('./config/mongoose.js');
// require('./config/routes.js')(app);

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client"));

var port = 8000;
var obj;
app.get('/hello', function(req, res, next)
{
	obj = {"message" : "hello world"};
	next();
}, 
function(req, res, next)
{
	return res.status(200).send(obj);
});



app.listen(port, function() {
  console.log('Under Armour API in action, on port ' + port);
})