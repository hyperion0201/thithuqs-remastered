import React from 'react'
import { connect } from 'react-redux'
import "./Question.css"
import { Button } from 'react-bootstrap'
import Countdown from './Countdown';
import Spinner from 'react-spinkit'
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.shuffleQuest = this.shuffleQuest.bind(this);
    this.randomList = this.randomList.bind(this);
    this.printQuest = this.printQuest.bind(this);
    this.saveQuest = this.saveQuest.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded:true });
    }, 3000);
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
  saveQuest = () => {};

  randomList = (array) => {
      let list = [];
      for (let i = 0;i<20;i++){
          list[i] = array[i];
      }
      return list;
  };
  printQuest = (quest) => {
    let renderlist =  quest.map((question, i) => {
      // create name  for each group radio buttons
      let qname = "quest" + i;
      return (
        <div key={i} 
              className="questLayout">
          <h5 className="qNumber">
            Câu {i+1}: {question.q}{" "}
          </h5>
          <div className="optionGroup">
          <label>
            <input type="radio" name={qname} value="a" />
            &#160; {question.ans1} 
          </label>
          <br />
          <label>
            <input type="radio" name={qname} value="b" />
            &#160; {question.ans2}
          </label>
          <br />
          <label>
            <input type="radio" name={qname} value="c" />
            &#160; {question.ans3}
          </label>
          <br />
          <label>
            <input type="radio" name={qname} value="d" />
            &#160; {question.ans3}
          </label>
          </div>
        </div>
      );
    });
    return renderlist;
  }

  render() {
    if (this.state.loaded === false) {
      return (
        <div>
        <Spinner className="loading" name="cube-grid"/>
        </div>
      );
    }
    // create list store 20 elements to render
    var list = [];
    // check questQuery state from store
    const qQueried = this.props.questQuery;
    switch (qQueried){
      case 1: {
        // shuffle original array 1
        let originlist = this.shuffleQuest(this.props.questionArray1);
        // generate list with 20 elements
          list = this.randomList(originlist); 
          // return list
          return (
            <div className="mainContent">
            <Countdown/>
            <div>{this.printQuest(list)}</div>
              <div className="submit"><Button bsStyle="primary">Submit</Button></div>
            </div>         
          );
      }
      case 2: {
          // shuffle original array 2
          let originlist = this.shuffleQuest(this.props.questionArray2);
          // generate list with 20 elements
            list = this.randomList(originlist);
            // return list
            return (
              <div className="mainContent">
              <Countdown/>
              <div>{this.printQuest(list)}</div>
                <div className="submit"><Button bsStyle="primary">Submit</Button></div>
              </div>   
            );
      }
      case 3: {
          // shuffle original array 3
          let originlist = this.shuffleQuest(this.props.questionArray3);
          // generate list with 20 elements
            list = this.randomList(originlist);
            // return list
            return (
              <div className="mainContent">
              <Countdown/>
              <div>{this.printQuest(list)}</div>
                <div className="submit"><Button bsStyle="primary">Submit</Button></div>
              </div>   
            );
      }
      default: return null;
    }
  }
}

const mapStateToProps = state => ({
  questQuery: state.questQuery
});

export default connect(mapStateToProps)(Question);
