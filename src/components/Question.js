import React from "react";
import { connect } from "react-redux";
import "./Question.css";
import quest1 from "../q1backup";
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.saveQuest = this.saveQuest.bind(this);
    this.printQuest = this.printQuest.bind(this);
    this.randomQuest = this.randomQuest.bind(this);
  }
  saveQuest = () => {};
  randomQuest = () => {};
  printQuest = () => {
    
  };

  render() {
    //console.log("queried: ", this.state.questQuery);
    // var optionName = "q1";
    var qgroup = this.props.questionArray.map((question, i) => {
      // create name  for each group radio buttons
      let qname = "quest" + i;
      return (
        <div>
          <h5 className="qNumber">
            Câu {i}: {question.q}{" "}
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
    return <div>{qgroup}</div>;
  }
}

const mapStateToProps = state => ({
  questQuery: state.questQuery
});

export default connect(mapStateToProps)(Question);
