import React from 'react'
import  './Sidebar.css';
import { Glyphicon } from 'react-bootstrap'
class Sidebar extends React.Component{

  openNav(){
    this.mySidebar.style.width ="100%";
  }

  closeNav(){
    this.mySidebar.style.width="0%";
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
              <span className="rectangle" href="#">Học phần 1</span><br/>
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