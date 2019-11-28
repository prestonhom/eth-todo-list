import React, { Component } from 'react';
import Web3 from 'web3'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      account:''
    }
  }

  async componentDidMount(){
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    window.ethereum.enable()
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    this.setState({account: accounts[0]})
  }
  render() {
  const account = this.state.account
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>account:{account}</p>
      </div>
    );
  }
}

export default App;
