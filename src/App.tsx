import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from 'components/aa/Test';


function App() {
  const env = import.meta.env.VITE_BASE_URL
  console.log('env: ', env)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

      <Test />
    </div>
  );
}

export default App;
