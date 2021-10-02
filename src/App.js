import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing'
import Dictionary from './components/Dictionary'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/dictionary'>
            <Dictionary />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
