import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'; 
import thunk from 'redux-thunk'; 
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer'; 
import { BrowserRouter as Router } from 'react-router-dom'; 

const reducer = combineReducers({
  userReducer
})

const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))


ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store } > 
      <Router> 
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
