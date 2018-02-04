console.log('app.js is ok');

class Header extends React.Component {


    render() {
        return <h1>{this.props.titulo}</h1>
    };
}

class Prueba extends React.Component {

    constructor() {
        super();

        this.botonClick = this.botonClick.bind(this);
    }

    botonClick() {
        console.log(this.props.textoBoton);
    };

    render() {
        return (<div>
            <button onClick={this.botonClick} >{this.props.textoBoton}</button>
        </div>)
    };

}

const appRoot = document.getElementById('app');

const template = (
    <div>
        <Header titulo="hola" />
        <Prueba textoBoton="boton"/>

    </div>
);

ReactDOM.render(template, appRoot);