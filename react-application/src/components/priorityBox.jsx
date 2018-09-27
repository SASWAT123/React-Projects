import React, { Component } from 'react';
import './priorityBox.css';

class PriorityBox extends Component{
    render(){
        return(
            <span className='col6' onClick={this.props.changeDept}>
                {this.props.value}
            </span>
        );
    }
}

export default PriorityBox; 