import { createStore } from 'redux'

const initialState = {
  isNavOpen:false,
  startTest:false,
  questQuery: 0,
  showResult:false,
  stopTime: false
}

const reducer = (state = initialState, action) => {
  console.log('reducer running', action);
  switch (action.type) {
    case "OPEN": 
    return {
      isNavOpen: true,
      startTest: false,
      questQuery:0,
      showResult:false,
      stopTime:false
    };
    case "CLOSE":
    return {
      isNavOpen: false,
      startTest: false,
      questQuery:0,
      showResult:false,
      stopTime:false
    };
    case "QUEST1":
    return {
      questQuery:1,
      startTest:true,
      showResult:false,
      stopTime:false
    
    };
    case "QUEST2":
    return {
      questQuery:2,
      startTest: true,
      showResult:false,
      stopTime:false
    };
    case "QUEST3":
    return {
      questQuery:3,
      startTest:true,
      showResult:false,
      stopTime:false
    };
    case "SUBMIT": 
    return {
      stopTime: true
    };
    
    default: 
    return {
      ...state
    }
  }
}

const store = createStore(reducer);

export default store;