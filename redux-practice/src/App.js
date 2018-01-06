import React, { Component } from 'react';
import './App.css';
import store from './reducers/index';



class App extends Component {
  render() {
    console.log(store.getState())
    return (
      <div className="App">
        <h1>{store.getState()}</h1>
        <button onClick={() => store.dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => store.dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      </div>
    );
  }
}

export default App;
