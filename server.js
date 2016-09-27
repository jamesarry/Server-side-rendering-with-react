//Grab babel to translate the jss data for nodeJS to understand
require('babel-register')({
     presets: ['react']
});

//Grab express package
var express = require('express');
//instantiate it
var app = express();

//Access your react properties in server.js
var React = require('react');//Grab react package
var ReactDOMServer = require('react-dom/server');//Start react-dom/server and save it in ReactDomServer
//Grab the component.jsx where you have your react code
var Component = require('./Component.jsx');

//Send all files to the public directory
app.use(express.static('public'));
//Adding props to turn the app from static to dynamic
var props = { title: 'Universal React'};
app.get('/', function(request, response) {
    
    //Call your html content from react
     var html = ReactDOMServer.renderToString(
         React.createElement(Component, props)
         );

     response.send(html);
});

var PORT = 3000;
app.listen(PORT, function() {
   console.log('http://localhost:' + PORT);
});
