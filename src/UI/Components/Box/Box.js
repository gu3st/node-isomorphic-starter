import React from 'react';
import './Box.css';

class Box extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div styleName="box" onClick={this.props.updateMessage}>
                {this.props.data}
            </div>
        );
    }
}

export default Box;