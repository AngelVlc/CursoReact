console.log('app.js is ok');


const app = {
    title: 'titulo app',
    options: ['o1', '02']
};

//buscar 'react events'

const onFormSubmit = (e) => {
    e.preventDefault();

    console.log('on form submit', e);

    const newOption = e.target.elements.option.value;

    if (newOption) {
        app.options.push(newOption);
        e.target.elements.option.value = '';

        renderApp();

        console.log(app.options);
    }
};

const appRoot = document.getElementById('app');

const renderApp = () => {

    // JSX - Javascript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.options.length > 0 ? 'Opciones' : ' Sin opciones'}</p>

            
            <ol>
            {
                app.options.map((val, ix) => {
                    return <p key={ix}>{val}</p>
                })
            }
            </ol>
            
            <p>length: {app.options.length}</p>

            <p>
                <button disabled={true}>disabled button</button>
            </p>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();