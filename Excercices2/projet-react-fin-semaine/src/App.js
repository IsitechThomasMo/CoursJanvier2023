import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Hook from './components/Hook';

function App() {
  const hook = [
    {
      id: 'e1',
      title: 'Interstellar',
      rating: 9,
      date: new Date(2014, 11, 5),
    },
    { 
      id: 'e2', 
      title: 'Fast & Furious', 
      rating: 7, 
      date: new Date(2001, 9, 26) 
    },   
    { 
      id: 'e3', 
      title: 'Star Wars VI', 
      rating: 9, 
      date: new Date(1983, 8, 19) 
    },
  ];

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h2>Une liste de films</h2>
      <Hook items={hook} />
    </div>

  );
}

export default App;