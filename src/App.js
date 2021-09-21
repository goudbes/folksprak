import React from 'react';
import './App.css';
import Nav from './components/Nav'
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
