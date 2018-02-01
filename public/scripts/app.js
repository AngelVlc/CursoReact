'use strict';

console.log('app.js is ok');

// JSX - Javascript XML
var template = React.createElement(
  'p',
  null,
  'Esto es JSX!'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
