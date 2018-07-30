import React, { Component } from 'react';


import './Header.css';
import Sidebar from './Sidebar';
class Header extends React.Component{
  render(){
    return(
      <header className="header">
    
      <h3><a  style={{color: 'black', textDecoration: 'none'}}>Thi Thử Quân Sự</a></h3>
    </header>
  );
}
}

export default Header;