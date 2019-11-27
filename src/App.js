import React, { Component } from 'react';
import Web3 from 'web3'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount(){
    this.loadBlockchainData()
  }

  async loadBlockchainData(){
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    console.log('network:', network)
  }
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
