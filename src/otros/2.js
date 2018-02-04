console.log('app.js is ok');

const textoParrafo = 'Texto parrafo.';

const persona = {
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
    return <h5>Otro titulo</h5>
}

const getOtroParrafo = () => {
    return <p>otro</p>
};


// JSX - Javascript XML
const template = (
    <div>
        <h1>Pruebas React</h1>
        <p>{textoParrafo}</p>
        <p>Nombre: {persona.nombre}</p>
        {persona.edad > 25 && <p>Edad: {persona.edad}</p>}   
        <p>Location: {getLocation(persona)}</p>
        { getOtroTitulo()}
        { getOtroParrafo()}   
        
        <form>
            <input type="text" name="option"/>
            <button>Add</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);