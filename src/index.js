import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

//Store

//Action
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};
let store = createStore(counter);

// Display it to console
store.subscribe(() => console.log(store.getState()));

//Dispatch
store.dispatch(decrement());

//Store
//Action
// const addBook = () => {
//   return {
//     type: "ADDBOOK",
//   };
// };

// const removeBook = () => {
//   return {
//     type: "REMOVEBOOK",
//   };
// };
// //Reducer
// const novels = (state = 10, action) => {
//   switch (action.type) {
//     case "ADDBOOK":
//       return state + 1;

//     case "REMOVEBOOK":
//       return state - 1;
//   }
// };
// let store = createStore(novels);

// //Dispatch
// store.dispatch(addBook());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
