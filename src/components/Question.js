import React from 'react'
import { connect } from 'react-redux'
import "./Question.css"
import { Button } from 'react-bootstrap'
import Countdown from './Countdown';
import Spinner from 'react-spinkit'
import Radio from './Radio';
import Result from './Result'
import store from '../store/stateStore';

var list = []; // initial global array storing questions before render
var ans = []; // initial global array storing user keys
var keys = []; // initial global array storing keys
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
       loaded: false,
        score: 0 , 
        answers: [],
        isResultActive: false     
       };
    // create array state which stored answer onChange action
    this.shuffleQuest = this.shuffleQuest.bind(this);
    this.randomList = this.randomList.bind(this);
    this.printQuest = this.printQuest.bind(this);
    this.showResult = this.showResult.bind(this);
    this.disableResult = this.disableResult.bind(this);
}

showResult(){
  this.props.dispatch({type: "SUBMIT"});
  let userlist = this.state.answers.slice();
  console.log(userlist);
  console.log(userlist[0].id);
  for (let i =0;i<20;i++) {
    for(let j = 0;j<userlist.length;j++){
      if (i.toString() === userlist[j].id){
        ans[i] = userlist[j].answer;
      }
    }
  }
  
  this.setState({isResultActive:true});
 
  console.log(this.props.isNavOpen);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  console.log(ans);
  
}
disableResult(){
  this.setState({isResultActive:false});
}
  componentWillMount() {
    // pre-generating list before rendering
    const required = this.props.questQuery;
    switch (required){
      case 1: {
        let shufflelist = this.shuffleQuest(this.props.questionArray1);
        list = this.randomList(shufflelist);
        break;
      }
      case 2: {
        let shufflelist = this.shuffleQuest(this.props.questionArray2);
        list = this.randomList(shufflelist);
        break;
      }
      case 3: {
        let shufflelist = this.shuffleQuest(this.props.questionArray3);
        list = this.randomList(shufflelist);
        break;
      }
      default: break;
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded:true });
    }, 2000);
  }
shouldComponentUpdate(nextProps, nextState){
  if(this.state.answers !== nextState.answers) return false;
  return true;
}

  shuffleQuest = (questList) => {
      let counter = questList.length;
      while (counter>0) {
        let index = Math.floor(Math.random()* counter);

        counter--;
        let temp = questList[counter];
        questList[counter] = questList[index];
        questList[index] = temp;
      }
      return questList;
  }

  randomList = (array) => {
      let list = [];
      for (let i = 0;i<20;i++){
          list[i] = array[i];
      }
      keys = this.extractKey(list);
      return list;
  };

  handleChange = (event) => {
    // answers: state
    // answer : user input
   const id = event.target.name;
   const answer = { id,  answer: event.target.value };
   let answers;
   if (this.state.answers.some(answer => answer.id === id)) {
      answers = [...this.state.answers.filter(answer => answer.id !== id), answer];
   }
   else {
     answers = [...this.state.answers, answer];
   }
   this.setState({ answers }, () => console.log(this.state.answers));
  }

  extractKey = (quest)  => {
    let keylist = [];
    for (let i = 0; i < quest.length; i++) {
      keylist[i] = quest[i].key;
    }
    return keylist;
  }
  printQuest = (quest) => {
    let renderlist =  quest.map((question, i) => {
      // create name  for each group radio buttons
      return (
        <div key={i} className="questLayout">
          <h5 className="qNumber">
            Câu {i+1}: {question.q}{" "}
          </h5>
          <div className="optionGroup">
          <React.Fragment key={i}>
              <Radio keyquest={question.key} groupName={i} onChange={this.handleChange.bind(this)} 
              ans={question.ans1} value="a"></Radio>
              <Radio keyquest={question.key} groupName={i} onChange={this.handleChange.bind(this)} 
              ans={question.ans2} value="b"></Radio>
              <Radio keyquest={question.key} groupName={i} onChange={this.handleChange.bind(this)} 
              ans={question.ans3} value="c"></Radio>
              <Radio keyquest={question.key} groupName={i} onChange={this.handleChange.bind(this)} 
              ans={question.ans4} value="d"></Radio>           
           </React.Fragment>     
          </div>
          <hr/>
        </div>
      );
    });
    return renderlist;
  }

  render() {
  
    console.log("rendering"); 
    console.log(this.props.stopTime);
    if (this.state.loaded === false) {
      return (
        <div >
          <Spinner className="loading" name="cube-grid"/>
        </div>
      );
    }
     else return (
        <div className="mainContent">
        <Countdown store={store}/>
        {this.state.isResultActive ? 
          <Result store={store} 
                  list={ans}
                  keys={keys}/> : <div></div>}
        <div>{this.printQuest(list)}</div>
          <div className="submit">
            <Button bsStyle="primary" onClick={this.showResult}>Submit</Button>
          
            </div>
        </div>   
      );
  }
}

const mapStateToProps = (state) => ({
  questQuery: state.questQuery,
});

export default connect(mapStateToProps)(Question);
