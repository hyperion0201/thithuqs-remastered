import React from 'react'
class Question extends React.Component{
  constructor (props){
    super(props);
    this.state ={ correctRecorded: false, incorrectRecorded: false};
  }
  handleChange(event){
    var score = 0;
    if( event.target.value == this.props.answer) {				
      if( this.state.correctRecorded === false ) {					
        if( this.props.applyIncorrectMarking === true && this.state.incorrectRecorded === true ) {
          score = 1 + this.props.marks;
        } else {
          score = this.props.marks;
        }
      }				
      this.setState({correctRecorded:true});
      this.setState ({incorrectRecorded:false});
    } else {				
      if( this.props.applyIncorrectMarking === true && this.state.incorrectRecorded === false ) {
        if( this.state.correctRecorded === true ) {
          score = -1 - this.props.marks;
        } else {
          score = -1;	
        }
        
      } else {
        if( this.state.correctRecorded === true ) {
          score = -this.props.marks;
        } 
      }
      this.setState({correctRecorded:false});
      this.setState({incorrectRecorded:true});
    }
    this.props.onAnswered(score);
    }

    render(){
      var qname = "option" + this.props.number;
      var qoptions = this.props.options.map(function(option,i) {
        return(
          <div><input type="radio"
           name={qname}
           value={option.text}
           key={i}/>{option.text}</div>
      )
      }); 
    return(
      <div>
        <div><strong>Câu hỏi </strong>: {this.props.question}</div>
        <div>{qoptions}</div>
        <br/>
      </div>
    );
    }
}

export default Question;
