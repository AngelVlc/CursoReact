const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

User.defaultProps = {
    age: 50
};

const appRoot = document.getElementById('app');

ReactDOM.render(<User name="pepito" />, appRoot);

//ReactDOM.render(<User name="pepito" age="30"/>, appRoot);