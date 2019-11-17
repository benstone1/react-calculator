import React from 'react';
import './App.css';
import Keypad from './Keypad';
import Output from './Output';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.buttonPressed = this.buttonPressed.bind(this)
  }

  state = {
    result: ''
  }

  buttonPressed(name) {
    this.setState({
      result: name
    });
  }

  render() {
    return (
      <div className="App">
        <Keypad buttonPressed = { this.buttonPressed }/>
        <Output result = {this.state.result} />
      </div>
    );  
  }
}

export default App;
