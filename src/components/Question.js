import React from 'react'
import { connect } from 'react-redux'

class Question extends React.Component{
  constructor(props){
    super(props);
    this.saveQuest = this.saveQuest.bind(this);
    this.printQuest = this.printQuest.bind(this);
    this.randomQuest = this.randomQuest.bind(this);
  }
  saveQuest = () => {

  }
  randomQuest = () => {

  }
  printQuest = () => {

  }
  
  render(){
    return (
       null
    );
  }
}

const mapStateToProps = (state) => ({
  //questQuery: state.questQuery
});

export default connect(mapStateToProps)(Question);
