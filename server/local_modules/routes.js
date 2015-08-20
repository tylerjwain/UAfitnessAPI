var express = require('express');
var app = express();
var request = require('request');



app.get("/test", function(req, res, next)
{
	request('http://www.google.com', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			return res.status(200).send(body); // Show the HTML for the Google homepage.
		}
	});
});

module.exports = app;