import { createStore } from 'redux'

const initialState = {
  isNavOpen:false,
  startTest:false,
  questQuery: 0,
  loaded: false
}

const reducer = (state = initialState, action) => {
  console.log('reducer running', action);
  switch (action.type) {
    case "OPEN": 
    return {
      isNavOpen: true,
      startTest: false,
      loaded:false,
      questQuery:0
    };
    case "CLOSE":
    return {
      isNavOpen: false,
      startTest: false,
      questQuery:0
    };
    case "QUEST1":
    return {
      questQuery:1,
      startTest:true
    
    };
    case "QUEST2":
    return {
      questQuery:2,
      startTest: true
    };
    case "QUEST3":
    return {
      questQuery:3,
      startTest:true
    };
    default: 
    return state;
  }
}

const store = createStore(reducer);

export default store;