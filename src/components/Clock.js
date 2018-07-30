import React, {Component} from 'react';

import './Clock.css';

class Clock extends Component{
    constructor(props) {
      super(props);
      this.state = {date:new Date()};
    }
    componentDidMount(){
      this.timerID = setInterval(
        ()=> this.tickClock(),1000);
    }
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
     tickClock(){
      this.setState({date:new Date()});
    }

    render(){
    return(
      <h4 className="clockStyle">Bây giờ là {this.state.date.toLocaleTimeString()}</h4>
    );
  }
}


export default Clock;