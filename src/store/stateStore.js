import { createStore } from 'redux'

const initialState = {
  isNavOpen:false,
  startTest:false
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
    case "START":
    return {
      //  isNavOpen:false,
        startTest: true
    };
    default: 
    return state;
  }
}

const store = createStore(reducer);

export default store;