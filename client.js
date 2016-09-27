//Grab react package
var  React = require('react');
var ReactDOM = require('react-dom');
var Component = require('./Component.jsx');

//Passing window.PROPS to the second argument of react rendering
var props = window.PROPS;
//use reactDom to render the react element to th document
ReactDOM.render(
    React.createElement(Component, props), document
);