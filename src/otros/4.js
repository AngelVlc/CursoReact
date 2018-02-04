console.log('app.js is ok');

const app = {
    title: 'Toggle'
};

const appRoot = document.getElementById('app');

let buttonText = 'Mostrar detalles';

let detailsVisible = false;

const details = 'Estos son los detalles!';

// const buttonClicked = () => {
//     detailsVisible = !detailsVisible;

//     if (detailsVisible) {
//         buttonText = 'Ocultar detalles';
//     } else {
//         buttonText = 'Mostrar detalles';
//     }

//     renderApp();
// };

// const renderApp = () => {

//     const template = (
//         <div>
//             <h1>{app.title}</h1>

//             <button onClick={buttonClicked}>{buttonText}</button>

//             <p hidden={!detailsVisible}>
//                 {details}
//             </p>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

const buttonClicked = () => {
    detailsVisible = !detailsVisible;

    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>

            <button onClick={buttonClicked}>{detailsVisible ? 'Ocultar detalles' : 'Mostrar detalles'}</button>

            {detailsVisible && (
                <p>
                    {details}
                </p>
            )}

        </div>
    );
    ReactDOM.render(template, appRoot);
}


renderApp();