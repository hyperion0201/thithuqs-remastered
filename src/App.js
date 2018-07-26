import React, {Component} from 'react';
import './App.css';
import { Label, Button } from 'react-bootstrap';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Clock from './components/Clock';
import Footer from './components/Footer';
import Countdown from './components/Countdown';
class App extends Component{
  render(){
    return(
      <div className="App">
      <Header></Header>
      <h5 className = "thongtincauhoi">Câu hỏi và đáp án của mỗi học phần mình dựa vào <a href="cc.com">đây</a></h5>
      <Clock></Clock>
      <br/>
      <Countdown></Countdown>
      <Footer></Footer>
      </div>
    )
  }
}

export default App;