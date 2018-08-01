import React from 'react'
import QuestionPaper from './QuestionPaper';


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={totalscore:0, testSubmitted:false};
  }
  handleChange(result){
    this.setState ({totalscore :result.totalscore, testSubmitted:true});
  }
  render(){
    var totalmarks = 0;
    this.props.details.questions.map(function(question){
      totalmarks += question.marks;
    });
    return(
      <div>					
        <h1>{this.props.details.name}</h1>
        <hr className="divider"/>
        <div>{this.props.details.description}</div>
        <table className="table">
          <tr>
            <td className="col-md-9">
            <QuestionPaper questions={this.props.details.questions} applyIncorrectMarking={this.props.details.applyIncorrectMarking}
             onSubmitted={this.handleChange}/>
             </td>
             <td className="col-md-3">
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Main;