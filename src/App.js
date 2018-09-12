import React, { Component } from 'react';
import './App.css';
import Tone from 'tone';

class App extends Component {
  constructor(props) {
    super(props)

    let synth = new Tone.Synth().toMaster()
    synth.triggerAttackRelease('C4', '8n')
  };

  
  
  render() {
    return (
      <div className="App">
          <ul class="set">
            <li class="white b"></li>
            <li class="black as"></li>
            <li class="white a"></li>
            <li class="black gs"></li>
            <li class="white g"></li>
            <li class="black fs"></li>
            <li class="white f"></li>
            <li class="white e"></li>
              <li class="black ds"></li>
              <li class="white d"></li>
              <li class="black cs"></li>
              <li class="white c"></li>
          </ul>
      </div>
    );
  }
}

export default App;
