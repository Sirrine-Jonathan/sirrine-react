import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jonathan\'s React Demo</h1>
		 <h3>This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a>.<br />
		 This sets up the environment so react can work</h3>
        </header>
        <p className="App-intro">
		 After the environment is set up, which includes: 
		 <ul>
			<li>installing node.js</li>
			<li>running \'create react app\' to set up React, JSX, ES6, and Flow syntax support</li>
			<li>and hosting the project on heroku</li>
		 </ul>
          All you have to do is edit <code>src/App.js</code> to customize the project.
        </p>
      </div>
    );
  }
}

export default App;
