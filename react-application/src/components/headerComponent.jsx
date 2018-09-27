import React, { Component } from 'react';
import './headerComponent.css';

class Header extends Component{
    render(){
        return(
            <header><h3>{this.props.title}</h3></header>
        );
    }
}
export default Header;