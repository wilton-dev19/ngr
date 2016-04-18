// Instanciate the express framework 
var express = require('express');
var app = express();

// Instanciate express-handlebars
var exphbs = require('express-handlebars');

// App Engine allow us to set the layout path with the main layout
app.engine('handlebars', exphbs({
    'layouts': 'main',
    'layoutsDir': './app/views/layouts',
}));

// Setting view directory and the engine used by the app
app.set('views', './app/views');
app.set('view engine', 'handlebars');

// Using an action, Choosing a location and tells the server what to do if it is reach!
app.get('/', function(request, response) {
    var message = "I'm The New Message From The Next App Version";
    var title = "My Node JS App";
    
    // Render generate a page using the name of the page as a string without the extension
    response.render('home', {message, title});
});

// Make the app variable content available for the entire project so that the server.js can use it
module.exports = app;