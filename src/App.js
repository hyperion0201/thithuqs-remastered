import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Content from './components/Content';
import store from './store/stateStore';
import Question from './components/Question';
import quest2 from './components/Question2';
class App extends Component{
  render(){
    return(
      <div>
     {/* <Sidebar store = {store}/> */}
     <Question store={store} questionArray ={quest2}/>
     <Footer/>
      </div>
    );
  }
}

export default App;