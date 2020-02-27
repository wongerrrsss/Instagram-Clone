import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to WongaGram (an instagram clone) <code>not affiliated with Instagram/Facebook</code> (this is purely for learning purposes, I am not profiting off of this)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter here
        </a>
      </header>
    </div>
  );
}

export default App;
