import { createStore } from 'redux'

const initialState = {
  isNavOpen:false,
  startTest:false,
  questQuery: 0
}

const reducer = (state = initialState, action) => {
  console.log('reducer running', action);
  switch (action.type) {
    case "OPEN": 
    return {
      isNavOpen: true,
      startTest: false
    };
    case "CLOSE":
    return {
      isNavOpen: false,
      startTest: false
    };
    case "QUEST1":
    return {
      questQuery:1
      //  isNavOpen:false,
       //startTest: true
    };
    case "QUEST2":
    return {
      questQuery:2
    };
    case "QUEST3":
    return {
      questQuery:3
    };
    default: 
    return state;
  }
}

const store = createStore(reducer);

export default store;