import React, { Component } from 'react';
import './addEmployee.css';

class Add extends Component{
    render(){
        return(
            <div id='input'>
                <label>Name:</label>
                <input type='text' id='name'/>
                <label>Gender:</label>
                <select id='gender' size="1">
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
                <label>Basic:</label>
                <input type='number' id='basic'/>
                <label>HRA:</label>
                <input type='number' id='hra'/>
                <label>Department:</label>
                <select id='dept' size="1">
                    <option value="Accounts">Accounts</option>
                    <option value="HR">HR</option>
                    <option value="Operations">Operations</option>
                    <option value="Sale">Sale</option>
                </select>
                <button type='button' onClick={this.props.addEmployee}>Add Employee</button>
            </div>
        );
    }
}
export default Add;