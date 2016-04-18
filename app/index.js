// Instanciate the express framework 
var express = require('express');
var app = express();

// Using an action, Choosing a location and tells the server what to do if it is reach!
app.get('/', function(request, response) {
    response.write("Haha haaa!.. I'm the Hello World Messaaaaage!!");
    response.send();
});

// Make the app variable content available for the entire project
module.exports = app;