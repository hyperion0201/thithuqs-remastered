import React from 'react'
import './Radio.css'
class Radio extends React.Component{
  constructor(props){
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.state={isAnswer: false}
  }
  onFocus(){
    this.Option.setAttribute("class", "focus");
  }
  onBlur(){
    this.Option.setAttribute("class", "");
  }
  render() {
    return (
      <div>
        <label ref={(option) =>{ this.Option = option}}>
          <input type="radio" name = {this.props.groupName}
          value ={this.props.value}
          onChange={this.props.onChange}/>&#160;{this.props.ans}
        </label>
      </div>
    )
  }
}
export default Radio;