import React, { Component } from 'react';
import './Header.css';
class Header extends React.Component{
  render(){
    return(
      <header className="header">
      <div className="menu-icon" onclick="menuIcon()">
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
      <h3><a href="#" style={{color: 'black', textDecoration: 'none'}}>Thi Thử Quân Sự</a></h3>
    </header>
  );
}
}

export default Header;