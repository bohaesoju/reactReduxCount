import React, { Component } from 'react';

import './App.css';
import Counter from './components/Counter';
import PaletteContainer from './containers/PaletteContainer';
import WaitingListContainer from './containers/WaitingListContainer';
import CounterContainer from "./containers/CounterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainer />
        <WaitingListContainer />
      </div>
    );
  }
}

export default App;
