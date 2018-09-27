import React, { Component } from 'react';
import Name from './empSection.jsx';
import './employeeView.css';
import PriorityBox from './priorityBox';
import Basic from './basicComponent';
import HRA from './HRAComponent';

class EmployeeView extends Component{       
    render(){
        return(
            <div className='employeeView'>
                <span className='col1'>{this.props.employee.emp_id}</span>

                <span className='col2'><Name empName={this.props.employee.emp_name} 
                updateName={(tn)=>{this.props.updateName(tn,this.props.employee.emp_id)}}/></span>

                <span className='col3'>{this.props.employee.gender}</span>

                <span className='col4'><Basic basic={this.props.employee.basic}
                updateBasic={(tn)=>{this.props.updateBasic(tn,this.props.employee.emp_id)}}/></span>

                <span className='col5'><HRA hra={this.props.employee.hra}
                updateHRA={(tn)=>{this.props.updateHRA(tn,this.props.employee.emp_id)}}/></span>

                <PriorityBox value={this.props.employee.emp_dept} changeDept={
                    ()=>this.props.changeDept(this.props.employee.emp_id)
                } />
            </div>
        );
    }
}
export default EmployeeView;