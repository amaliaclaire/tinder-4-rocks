import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Rock from './components/Rock'
import RockList from './components/RockList'

class App extends Component {
  render() {
    return (
      <div>
      <h1> welcome to tinder for rocks </h1>
      <RockList/>
      <Rock {...rock}/>
      </div>
    )
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
