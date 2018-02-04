let count = 0;
const someId = 'miId';
const addOne = () => { 
    count++;
    console.log('add one');
    renderCounterApp();
};

// un template es un object, por eso no se puede poner class para la clase css (hay q poner className)
// para ver los elementos que se pueden poner buscar 'react dom elements'


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template2 = (  
        <div>
            <h1>count: {count}</h1>
            <p>
                <button id="my-id" className="clase" onClick={addOne}>+1</button>
            </p>
            <p>
                <button id="{someId}" >Otro</button>
            </p>
        </div>
    )

    ReactDOM.render(template2, appRoot);
};

renderCounterApp();
