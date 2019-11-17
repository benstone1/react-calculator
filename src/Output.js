import React from 'react';

class Output extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.result}</p>
            </div>
        )
    }
}

export default Output;