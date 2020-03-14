import React from 'react';
import './App.css';
import Keypad from './Keypad';
import Output from './Output';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.buttonPressed = this.buttonPressed.bind(this)
    this.evaluate = this.evaluate.bind(this)
  }

  state = {
    shouldClearScreenOnNextWrite: false,
    firstOperand: '',
    pendingOperator: '',
    result: ''
  }

  buttonPressed(name) {
    this.evaluate(name)
  }

  evaluate(name) {
    if (!isNaN(parseFloat(name))) {
      let result;
      if (this.state.shouldClearScreenOnNextWrite) {
        result = name
      } else {
        result = this.state.result + '' + name        
      }
      this.setState({
        result: result,
        shouldClearScreenOnNextWrite: false
      });  
    } else if (name === "=") {
      let newResult = ''
      if (this.state.pendingOperator === "+") {
        newResult = +this.state.firstOperand + +this.state.result
      } else if (this.state.pendingOperator === "-") {
        newResult = this.state.firstOperand - this.state.result
      } else {
        return
      }
      this.setState({
        pendingOperator: '',
        result: newResult
      })
    }
    else {
      this.setState({
        shouldClearScreenOnNextWrite: true,
        firstOperand: this.state.result,
        pendingOperator: name,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Output result = {this.state.result} />
        <Keypad buttonPressed = { this.buttonPressed }/>
      </div>
    );  
  }
}

export default App;
