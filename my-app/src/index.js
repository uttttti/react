import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { GameContainer } from './containers';
import { gameReducer } from "./mutations";
import "./index.css";


const app = combineReducers({ game: gameReducer });
const store = createStore(app);
ReactDOM.render(
  <Provider store={store}>
    <GameContainer />
  </Provider>, 
  document.getElementById("root")
);
