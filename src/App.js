import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Content from './components/Content';
import store from './store/stateStore';
import Question from './components/Question';
class App extends Component{
  render(){
    return(
      <div>
       <Sidebar store = {store}/> 
       <Content store={store}/>
      </div>
    );
  }
}

export default App;