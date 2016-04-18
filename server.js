// Declaring the port and the host for the server
var port = "8080";
var host = "0.0.0.0";

// Instanciate the framework
var express = require('express');
var app = express();

// Include app directory to use index.js file
var appDir = require('./app/index');
app.use(appDir);

// Make the server listening to our request using host and port variables
app.listen(port, host);
console.log("Server is running on port: "+port+" and host: "+host);

//module.exports = app;