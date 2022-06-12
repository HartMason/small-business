import { combineReducers } from "redux";

const user = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      action.value.online = true;
      console.log(action.value);
      return action.value;
    case "LOGOUT": {
      console.log(state, 'reducer')
      const newState = {...state}
      newState.online = false;
      newState.username = '';
      newState.password = '';
      return newState
    }
    default:
      return state;
  }
};

const businesses = (state = [], action) => {
  switch (action.type) {
    case "ADD_BUSINESS": 
      action.value.id = state.length + 1;
      console.log(action.value, state, "HELLO WORLD");
      const copy = state.slice()
      const newState = [...copy, action.value];
      return newState
    
    case "REMOVE_BUSINESS": 
      const businesses = [...state];
      console.log(state, "action");
      businesses.splice(action.value, 1);
      console.log(businesses, "action");
      return businesses;
    
    default:
      return state;
  }
};

export default combineReducers({ user, businesses });
