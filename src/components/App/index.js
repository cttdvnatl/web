import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import './App.css'

import {Home, About, Contact} from '../../pages'

// const Links = () =>
//   <nav>
//     <Link to='/'>Home</Link>
//     <Link to='/about'>About</Link>
//     <Link to='/contact'>Contact</Link>
//   </nav>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
