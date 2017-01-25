import React from 'react';
import './Box.css';

class Box extends React.Component{
    render(){
        return (
          <div styleName="box" onClick={this.props.updateMessage}>
            {this.props.data}
          </div>
        );
    }
}

Box.propTypes = {
    updateMessage: React.PropTypes.func.isRequired,
    data: React.PropTypes.string.isRequired
};

export default Box;