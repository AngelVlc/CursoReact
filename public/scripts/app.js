'use strict';

console.log('app.js is ok');

var textoParrafo = 'Texto parrafo.';

var persona = {
    nombre: 'nombre persona',
    edad: 30,
    options: [1, 2, 3]
};

function getLocation(persona) {
    if (persona.location) {
        return persona.location;
    } else {
        return 'sin location';
    }
}

function getOtroTitulo() {
    return React.createElement(
        'h5',
        null,
        'Otro titulo'
    );
}

var getOtroParrafo = function getOtroParrafo() {
    return React.createElement(
        'p',
        null,
        'otro'
    );
};

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Pruebas React'
    ),
    React.createElement(
        'p',
        null,
        textoParrafo
    ),
    React.createElement(
        'p',
        null,
        'Nombre: ',
        persona.nombre
    ),
    persona.edad > 25 && React.createElement(
        'p',
        null,
        'Edad: ',
        persona.edad
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(persona)
    ),
    getOtroTitulo(),
    getOtroParrafo()
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
