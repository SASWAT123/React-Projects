import React, { Component } from 'react';
import Header from './components/headerComponent';
import ReactDOM from 'react-dom';
import './App.css';
import EmployeeView from './components/employeeView';
import Footer from './components/footerComponent';
import Add from './components/addEmployee';
import Delete from './components/deleteEmployee';

class App extends Component {
  constructor(){
    super();
    this.state={
      title:'Employee Management System',
      employees: [
        {emp_id:101,emp_name:'Saswat Priyadarshan',gender:'Male',basic:50000,hra:10,emp_dept:'Accounts'},
        {emp_id:102,emp_name:'Stephen Wahid',gender:'Male',basic:40000,hra:8,emp_dept:'HR'},
        {emp_id:103,emp_name:'Rajesh Pathak',gender:'Male',basic:60000,hra:12,emp_dept:'Operations'},
        {emp_id:104,emp_name:'Prateek Sinha',gender:'Male',basic:70000,hra:13,emp_dept:'Accounts'},
        {emp_id:105,emp_name:'Alisha Gupta',gender:'Female',basic:30000,hra:10,emp_dept:'Operations'},
        {emp_id:106,emp_name:'Zoya Yasin',gender:'Female',basic:50000,hra:7,emp_dept:'Sale'},
        {emp_id:107,emp_name:'Diksha Sresth',gender:'Female',basic:60000,hra:11,emp_dept:'Sale'}
      ],
      population:{
        gents:4,
        ladies:3,
        total:7,
        emp_hr:1,
        emp_accounts:2,
        emp_sales:2,
        emp_operation:2
      }
    }
  }

  handleChangeDept(emp_Id){
    let modifiedEmployees = this.state.employees;
    let modifiedPopulation = this.state.population;

    let ind=modifiedEmployees.findIndex((t)=>t.emp_id===emp_Id);

    if(modifiedEmployees[ind].emp_dept==='Accounts')
      modifiedEmployees[ind].emp_dept='HR';
    else if(modifiedEmployees[ind].emp_dept==='HR')
      modifiedEmployees[ind].emp_dept='Operations';
    else if(modifiedEmployees[ind].emp_dept==='Operations')
      modifiedEmployees[ind].emp_dept='Sale';
    else
      modifiedEmployees[ind].emp_dept='Accounts';

    modifiedPopulation.gents=4;
    modifiedPopulation.ladies=3;
    modifiedPopulation.total=7;
    modifiedPopulation.emp_hr=0;
    modifiedPopulation.emp_accounts=0;
    modifiedPopulation.emp_sales=0;
    modifiedPopulation.emp_operation=0;

    modifiedEmployees.forEach((t)=>{
      if(t.emp_dept==='Accounts')modifiedPopulation.emp_accounts++;
      else if(t.emp_dept==='HR')modifiedPopulation.emp_hr++;
      else if(t.emp_dept==='Operations')modifiedPopulation.emp_operation++;
      else modifiedPopulation.emp_sales++;
    });
    this.setState({employees:modifiedEmployees});
    this.setState({population:modifiedPopulation});
  }

  handleAddEmployee(){
    //alert('Addition Logic here');\
    let name = ReactDOM.findDOMNode(document.getElementById("name"))
    let gender = ReactDOM.findDOMNode(document.getElementById("gender"))
    let basic = ReactDOM.findDOMNode(document.getElementById("basic"))
    let hra = ReactDOM.findDOMNode(document.getElementById("hra"))
    let dept = ReactDOM.findDOMNode(document.getElementById("dept"))
    
    let modifiedEmployees = this.state.employees;
    let modifiedPopulation = this.state.population;

    modifiedEmployees.push({emp_id: 101 + (modifiedEmployees.length),emp_name:name.value,gender:gender.value,basic:basic.value,hra:hra.value,emp_dept:dept.value});
    this.setState({employees:modifiedEmployees});

    modifiedPopulation.gents=0;
    modifiedPopulation.ladies=0;
    modifiedPopulation.total=modifiedEmployees.length;
    modifiedPopulation.emp_hr=0;
    modifiedPopulation.emp_accounts=0;
    modifiedPopulation.emp_sales=0;
    modifiedPopulation.emp_operation=0;

    let modifiedEmployees1 = this.state.employees;

    modifiedEmployees1.forEach((t)=>{
      if(t.gender==='Male')modifiedPopulation.gents++;
      else
        modifiedPopulation.ladies++;
    });

    modifiedEmployees.forEach((t)=>{
      if(t.emp_dept==='Accounts')modifiedPopulation.emp_accounts++;
      else if(t.emp_dept==='HR')modifiedPopulation.emp_hr++;
      else if(t.emp_dept==='Operations')modifiedPopulation.emp_operation++;
      else modifiedPopulation.emp_sales++;
    });

    this.setState({population:modifiedPopulation});
    this.setState({employees:modifiedEmployees});
  }

  handleDeleteEmployee(){
    let id = ReactDOM.findDOMNode(document.getElementById("id"))

    let modifiedEmployees = this.state.employees;
    let modifiedPopulation = this.state.population;

    modifiedPopulation.gents=0;
    modifiedPopulation.ladies=0;
    modifiedPopulation.total=0;
    modifiedPopulation.emp_hr=0;
    modifiedPopulation.emp_accounts=0;
    modifiedPopulation.emp_sales=0;
    modifiedPopulation.emp_operation=0;

    let ind=modifiedEmployees.findIndex((t)=>t.emp_id===Number(id.value));
    //alert(ind);
    if(ind > -1)modifiedEmployees.splice(ind,1);  
    else alert('Employee not found')

    modifiedEmployees.forEach((t)=>{
      if(t.gender==='Male')modifiedPopulation.gents++;
      else
        modifiedPopulation.ladies++;
    });

    modifiedPopulation.total = modifiedPopulation.gents + modifiedPopulation.ladies;

    modifiedEmployees.forEach((t)=>{
      if(t.emp_dept==='Accounts')modifiedPopulation.emp_accounts++;
      else if(t.emp_dept==='HR')modifiedPopulation.emp_hr++;
      else if(t.emp_dept==='Operations')modifiedPopulation.emp_operation++;
      else modifiedPopulation.emp_sales++;
    });

    this.setState({population:modifiedPopulation});
    this.setState({employees:modifiedEmployees});
  }

  updateName(tnm, taskId) {
    let modifiedTask = this.state.employees;
    modifiedTask.find((t) => t.emp_id === taskId).emp_name = tnm;
    this.setState({ employees: modifiedTask });
  }

  updateBasic(basic, taskId) {
    let modifiedTask = this.state.employees;
    modifiedTask.find((t) => t.emp_id === taskId).basic = basic;
    this.setState({ employees: modifiedTask });
  }

  updateHRA(HRA, taskId) {
    let modifiedTask = this.state.employees;
    modifiedTask.find((t) => t.emp_id === taskId).hra = HRA;
    this.setState({ employees: modifiedTask });
  }

  render() {
    return (
      <div id='main'>
        <Header title={this.state.title} />
        <span className='badge'>Number of Gents: {this.state.population.gents}</span>
        <span className='badge'>Number of Ladies: {this.state.population.ladies}</span>
        <span className='badge'>Total Employees: {this.state.population.total}</span>
        <span className='badge'>Employees in HR: {this.state.population.emp_hr}</span>
        <span className='badge'>Employees in Accounts: {this.state.population.emp_accounts}</span>
        <span className='badge'>Employees in Operations: {this.state.population.emp_operation}</span>
        <span className='badge'>Employees in Sales: {this.state.population.emp_sales}</span>
        
        {
          this.state.employees.map(
            (employee,i)=><EmployeeView employee={employee} key={i} 
            changeDept={this.handleChangeDept.bind(this)}
            updateName={this.updateName.bind(this)}
            updateBasic={this.updateBasic.bind(this)}
            updateHRA={this.updateHRA.bind(this)}/>
          )
        }

        <Add addEmployee={this.handleAddEmployee.bind(this)}/>

        <Delete deleteEmployee={this.handleDeleteEmployee.bind(this)}/>


        <Footer />
        
      </div>
    );
  }
}

export default App;

