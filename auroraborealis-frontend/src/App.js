import React from 'react';
import './App.css';
import Main from './containers/Main'; 
import { connect } from 'react-redux'; 

function App() {
  return (
    <div className="App">
      <Main /> 
    </div>
  );
}

export default App;
