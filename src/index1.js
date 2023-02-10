import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

const dummyUser = {
  name: 'Tommy',
  age: 25,
  hobby: 'coding'
}

export const UserContext = createContext();
ReactDOM.render(
  <UserContext.Provider value={dummyUser}>
    <App />
  </UserContext.Provider>,
  document.getElementById("root")
);
