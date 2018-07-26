import React, {Component} from 'react';
import './QuestionQuery.css';

class QuestionQuery extends React.Component{
  render(){
    return(
        <div className="question-query">
          <p className="quest1" onClick={questionSelect(this)}></p><br/>
          <p className="quest2" onClick={questionSelect(this)}></p><br/>
          <p className="quest3" onClick={questionSelect(this)}></p><br/>
        </div>
    );
  }
}

export default QuestionQuery;