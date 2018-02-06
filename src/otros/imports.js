import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log(validator.isNumeric('a'));

const template = (
    <p>Hola</p>
);

ReactDOM.render(template, document.getElementById('app'));