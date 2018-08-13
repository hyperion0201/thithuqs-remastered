import React, { Component } from 'react'
import './Footer.css';

class Footer extends Component{
  render(){
    return(
        <div>
        <div className="footer">
        <a className ="author" href="https://facebook.com/hyperion0201" target="blank">
        Một dự án nhỏ của Hiếu Hoàng. Sử dụng React, Redux, ES6, Webpack.<br/></a>
        <a className="whythis" href ="https://github.com/hyperion0201/thithuqs-remastered/blob/master/README.md" target="blank">Tại sao lại có cái này?</a>
        </div>
        </div>
    );
  }
}

export default Footer;