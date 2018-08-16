import React, { Component } from 'react';
import './Countdown.css';

class Countdown extends Component{
  constructor(){
    super();
    this.state = {time:{}, seconds : 1800};
    // set time by seconds, then using convert function to split into hours, mins, secs
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.timeDown = this.timeDown.bind(this);
  }
  componentDidMount(){
    let timeLeft = this.convertSecToTime(this.state.seconds);
    // this will create a variable called timeLeft and return a timeObj object after invoking convertSecToTime function.
    this.setState({ time: timeLeft });
  };


  startTimer(){
    if (this.timer === 0){
      this.timer = setInterval(this.timeDown, 1000);
    }
  }

  timeDown(){
    // remove 1 sec, set state then re-render
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.convertSecToTime(seconds),
      seconds: seconds,
    });
    // if we're at zero.
    if (seconds === 0 ){
      clearInterval(this.timer);
    }

  }

  convertSecToTime(sec){
    let hours = Math.floor(sec / 3600);

    let remain_for_mins = sec % 3600; // remaining seconds to divisor for minutes.
    let minutes = Math.floor(remain_for_mins / 60);

    let remain_for_secs = Math.ceil(remain_for_mins % 60);
    let seconds = Math.ceil(remain_for_secs);

    let timeObj = {
      "h" : hours,
      "m": minutes,
      "s": seconds
    };
    return timeObj;
  }

  render(){
    return(
      <div className="count-down">
      {this.startTimer()}
      <p className="time-info"> <span>{this.state.time.m} : {this.state.time.s} </span></p>
      </div>
    );
  }
}

export default Countdown;