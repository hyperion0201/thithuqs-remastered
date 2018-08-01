import React from 'react'
import  './Sidebar.css';
import { Glyphicon } from 'react-bootstrap'
import Main from './Main';
import quest1 from './Q1';
import { ReactDOM } from 'react-dom';
import Header from './Header';

class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state ={query1:false};
    this.queryQuestion = this.queryQuestion.bind(this);
   
  }
  openNav(){
    this.mySidebar.style.width ="100%";
  }

  closeNav(){
    this.mySidebar.style.width="0%";
  }

  queryQuestion(){
    this.setState({query1:true});
  }
  render(){
    return(
      // id : mySidebar
      <div className="mySidebar">
            <div ref={ sidebar => {
            this.mySidebar = sidebar;
              }} 
              className="sidenav">
              <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>X</a>
              <span className="rectangle" onClick={this.queryQuestion}>Học phần 1</span><br/>
              {this.state.query1 ? (
                this.mySidebar.innerHTML='con cat'
                
                ) : null}
              
              <span className="rectangle" href="#">Học phần 2</span><br/>
              <span className="rectangle" href="#">Học phần 3</span><br/>
            </div>
              <div className="myNav">
              <span className="gly-icon">
                  <Glyphicon glyph="glyphicon glyphicon-th-list" onClick={this.openNav.bind(this)}></Glyphicon>
              </span>
            <span className="brand">Thi Thử Quân Sự</span>
            </div>
           
      </div>
      
     
    );
  }
}

export default Sidebar;