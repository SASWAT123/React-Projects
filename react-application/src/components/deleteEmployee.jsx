import React, { Component } from 'react';
import './deleteEmployee.css';

class Delete extends Component{
    render(){
        return(
            <div id='input'>
                <label>Enter Id to delete:</label>
                <input type='number' id='id'/>
                <button type='button' onClick={this.props.deleteEmployee}>Delete Employee</button>
            </div>
        );
    }
}
export default Delete;