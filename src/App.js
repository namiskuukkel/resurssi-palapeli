import React from 'react';
import './App.css';

import Personnel from'./components/Personnel/PersonList'
import { createStore } from 'redux'



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Personnel/>
        </div>
      </div>
    );
  }
}

export default App;
