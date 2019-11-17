import React from 'react';

class Keypad extends React.Component {

    constructor(props) {
        super(props)
        this.buttonPressed = this.buttonPressed.bind(this) //https://stackoverflow.com/questions/33973648/react-this-is-undefined-inside-a-component-function
    }
    buttonPressed(event) {
        this.props.buttonPressed(event.target.name)
    }
    render() {
        return (
            <div>
                {[...Array(10).keys(), ...['+','-','=']].slice(1).map(val => (
                    <button key={val} name={val} onClick={this.buttonPressed}>{val}</button>                    
                ))}
            </div>
        )
    }
}

export default Keypad;