import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './pages/home'
import Converter from './pages/converter'

export default () => {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
            <Link to="/converter">
              Currency converter
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/converter">
            <Converter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
