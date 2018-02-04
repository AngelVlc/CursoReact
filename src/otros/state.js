class Counter extends React.Component {
    constructor() {
        super();

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };  
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };  
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };  
        });
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h5>Count: {this.state.count}</h5>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<Counter />, appRoot);