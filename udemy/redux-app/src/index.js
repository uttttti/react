import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import App from './containers/App';

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
