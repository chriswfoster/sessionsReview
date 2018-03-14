import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login'

//REDUX IMPORTS:
//To make this Component work, we need to connect it with our top level redux store.


class App extends Component {
  
  
  
  render() {
 
    return (

      <div className="App">
        <header className="App-header">
        <Login />
          
        </header>
      
      </div>
    );
  }
}

export default App
