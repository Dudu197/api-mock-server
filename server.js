var express = require('express');
var app = express();

app.get('*', function (req, res) {
	console.log(new Date().toLocaleString());
	console.log('request received on ' + req.originalUrl);
	console.log('Body:');
	console.log(req.query);
	res.send({status: 'ok'})
});

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});