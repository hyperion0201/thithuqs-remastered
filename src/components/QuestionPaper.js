import React from 'react' 
import Question from './Question';

class QuestionPaper extends React.Component{
  constructor(props){
    super(props);
    this.state={totalscore:0};
  }

  handleChange(score){
    this.setState({totalscore:this.state.totalscore+score});
  }
  handleSubmitted(event){
    var result = {totalscore: this.state.totalscore};
    this.props.onSubmitted( result );
  }

  render(){ 
    var questionAnswers = this.props.questions.map(function(question,i){
      return(
        <tr><td><Question question={question.qtext}
         number={question.no}
          options={question.options}
           answer={question.ans}
            marks={question.marks} 
            applyIncorrectMarking ={this.props.applyIncorrectMarking}
             onAnswered={this.handleChange}
             key={i}/></td></tr>
        );
    }, this);
    return(
      <div>					
        <table className="table table-striped">{questionAnswers}</table>
        <div><input type="button" className="btn btn-primary" value="Submit" onClick={this.handleSubmitted}/></div>
      </div>
      
    );
  }
}

export default QuestionPaper;
