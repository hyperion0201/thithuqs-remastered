import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarExample from './components/SidebarExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chào mừng bạn đến với Thi Thử Quân Sự</h1>
        </header>
        <p className="App-intro">
          Để bắt đầu thi, hãy chọn học phần:
        </p>
        <p className="About">
        Click vào nút ở góc trái để chọn học phần (có 3 gói câu hỏi của 3 học phần)</p>
      <SidebarExample className= "Sidebar"/>
      </div>
    );
  }
}

export default App;
