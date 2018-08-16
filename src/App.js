import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import store from './store/stateStore';
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