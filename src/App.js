import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <Nav></Nav>
        <Landing></Landing>
      </div>
    </BrowserRouter>
  );
}

export default App;
