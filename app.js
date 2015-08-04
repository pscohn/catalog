var express = require('express');
var app = express();
var port = 8000;

require('./app/routes.js')(app);
app.listen(port);
