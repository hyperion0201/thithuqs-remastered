import React from 'react'
import  './Sidebar.css';
import { Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'

class Sidebar extends React.Component{
  
  constructor(props){
    super(props);
    this.queryQuestion = this.queryQuestion.bind(this);
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

  queryQuestion(){
   this.closeNav();
   // this is why the Content is being rendered after close Sidebar.
   this.props.dispatch({type: "START"});
   
  }
  
  render(){
    console.log(this.props.isNavOpen);
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
                 onClick={this.queryQuestion}>Học phần 1</span><br/>             
              <span className="rectangle" href="#">Học phần 2</span><br/>
              <span className="rectangle" href="#">Học phần 3</span><br/>
              </div>
            </div>
             
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isNavOpen: state.isNavOpen,
  // wrap ({}) because mapStateToProps return an object.
});

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps)(Sidebar);