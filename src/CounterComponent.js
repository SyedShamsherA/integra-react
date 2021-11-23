import React, {Component} from 'react';

class CounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: 5 
        }
    } 

    handleIncrement = () => {
        this.setState({initialValue: this.state.initialValue + 1})
    }
    handleDecrement = () => {
        this.setState({initialValue: this.state.initialValue - 1})
    }
    handleReset = () => {
      this.setState({initialValue: 5})
    }
    render(){
        return(
            <>
            <h2>{this.props.componentName} Component</h2>
            <h4>Initial Value : {this.state.initialValue}</h4>
            <button onClick={this.handleIncrement}>Increment</button> &nbsp;
            <button onClick={this.handleDecrement}>Decrement</button> &nbsp;
            <button onClick={this.handleReset}>Reset</button>
            
            </>
        )
    }
}

export default CounterComponent;