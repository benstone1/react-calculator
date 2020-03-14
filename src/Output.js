import React from 'react';

class Output extends React.Component {
    render() {
        return (
            <div>
                <p>{this.getDisplayText()}</p>
            </div>
        )
    }
    getDisplayText = () => {
        if (this.props.result) {
            return this.props.result
        } else {
            return "0"
        }
    }
}

export default Output;