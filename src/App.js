import React, { Component } from 'react';
import logo from './liprofile.jpg';
import ColorBlock from './Components/ColorBlock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header container">
		
		 <div id="left-head">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to Jonathan's React Demo</h1>
			<span>This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a></span>
		 </div>
		 
		 <div id="right-head">
			<h1>Project Description: </h1>
			<p>
				A CSS color finder built with react. Type a color into a text input and
				if it is a valid css color it the surrounding div will change to that color. 
				This works because of reacts two way data binding, state model for components, and virtual DOM.
			</p>
		 </div>
        </header>
		<ColorBlock />
      </div>
	  
	 
    );
  }
}

export default App;
