import React, { Component } from 'react'
import './Footer.css';

class Footer extends Component{
  render(){
    return(
        <div>
        <div className={this.props.whereFooter}>
        <p className="f">Một dự án nhỏ của <a className ="author" href="https://facebook.com/hyperion0201" target="blank">
        Hiếu Hoàng</a>.
        Sử dụng <a className="react" href="https://reactjs.org/">React</a>,
        <a className="es6" href="https://www.ecma-international.org/default.htm"> ES6</a>,
        <a className="redux" href="https://redux.js.org/"> Redux</a>,
        <a className="webpack" href="https://webpack.js.org/"> Webpack</a>. Mã nguồn có trên <a href="https://github.com/hyperion0201/thithuqs-remastered"><i>GitHub.</i>
        </a></p>
        
        <a className="whythis" href ="https://github.com/hyperion0201/thithuqs-remastered/blob/master/README.md" target="blank">Tại sao lại có cái này?</a>
        </div>
        </div>
    );
  }
}

export default Footer;