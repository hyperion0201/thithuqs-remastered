import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './Footer.css';

class Footer extends React.Component{
  render(){
    return(
        <div className="footer">
        Một dự án nhỏ của Hiếu Hoàng. Sử dụng React, ES6, Webpack.<br/>
        <a className="whythis" href ="https://github.com/hyperion0201/thithuqs-remastered/blob/master/README.md" target="blank">Tại sao lại có cái này?</a></div>
    );
  }
}

export default Footer;