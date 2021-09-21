import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Dictionary from './components/Dictionary';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
