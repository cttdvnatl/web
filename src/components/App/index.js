import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'

import {Home, About, Contact} from '../../pages'

const Links = () =>
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
  </nav>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Links />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
