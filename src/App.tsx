import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './Header';

function App() {
  return (
    <>
      <MenuAppBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            吉田さん<code></code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>

  );
}

export default App;
