var express = require('express');
var app = express();
var port = 8000;

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./routes/routes.js')(app);
app.listen(port);
