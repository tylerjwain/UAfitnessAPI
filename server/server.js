var express = require('express');
var app = express();

// require('./config/mongoose.js');
// require('./config/routes.js')(app);

app.use(express.static(__dirname + "/client"));

app.listen(8000, function() {
  console.log('Under Armour API in action, on server 6789');
})