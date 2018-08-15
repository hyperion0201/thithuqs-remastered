import React from 'react'
import  './Sidebar.css';
import { Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'

class Sidebar extends React.Component{
  
  constructor(props){
    super(props);
    this.queryQuestion1 = this.queryQuestion1.bind(this);
    this.queryQuestion2 = this.queryQuestion2.bind(this);
    this.queryQuestion3 = this.queryQuestion3.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
   
  }
  openNav(){
    this.props.dispatch({type: "OPEN"});
   
    this.mySidebar.style.width ="100%";
  }

  closeNav(){
    this.props.dispatch({type: "CLOSE"});
     this.mySidebar.style.width="0%";
   
  }

  queryQuestion1(){
   this.closeNav();
   this.props.dispatch({type: "QUEST1"});
   // this is why the Content is being rendered after close Sidebar.
  // this.props.dispatch({type: "START"});
  }
  queryQuestion2(){
    this.closeNav();
    this.props.dispatch({type:"QUEST2"});
  }
  queryQuestion3(){
    this.closeNav();
    this.props.dispatch({type: "QUEST3"});
  }
  render(){
    console.log(this.props.isNavOpen);
    console.log("question queried :" , this.props.questQuery);
    return( 
      <div>
          <div className="myNav">
            <span className="gly-icon">
            <Glyphicon glyph="glyphicon glyphicon-th-list" onClick={this.props.isNavOpen ? this.closeNav : this.openNav}></Glyphicon>
            </span>
            <span className="brand">Thi Thử Quân Sự</span>
            <hr className="hline"/>
          </div>
            <div className="sidenav" ref={(nav)=>{
              this.mySidebar = nav;
            }}>
            <div className="r-group">
              <span className="rectangle"
                 onClick={this.queryQuestion1}>Học phần 1</span><br/>             
              <span className="rectangle" onClick={this.queryQuestion2}>Học phần 2</span><br/>
              <span className="rectangle" onClick={this.queryQuestion3}>Học phần 3</span><br/>
              </div>
            </div>
             
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isNavOpen: state.isNavOpen
  // wrap ({}) because mapStateToProps return an object.
});


export default connect(mapStateToProps)(Sidebar);