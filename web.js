var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
fs=require('fs');
var home = fs.readFileSync("index.html");
response.send(home.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
