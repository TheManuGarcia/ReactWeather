var React = require('react');
var ReactDOM = require('react-dom');

// Below is a simpler syntax to avoir declaring each router variable. e.g: var Route = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//When we are returning JSX, we have to return only one root element, in this case <div>


ReactDOM.render(
   //Passing our Greeter component using JSX. || Passing in a property (prop) into our Greeter call.
    <h1>BoilerPlate App!</h1>,
    document.getElementById('app')
);
