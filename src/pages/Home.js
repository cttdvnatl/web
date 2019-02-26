import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import Header from '../components/Header';
//import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

export default class Home extends Component {
  componentDidMount() {
    //This is to handle login or fetch info
  }

  render() {
    // Pull in states
    // const { loading, error, user } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   user,
    // };

    return (
      <div className="App">
        <Header />
        
      </div>
    )
  }
}

//should you proptypes to validate inputs
// HomePage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.bool,
//   ]),
//   user: PropTypes.object
// };

// <header className="App-header">
// <img src={logo} alt="logo" />
// <h1>Home Page</h1>
// </header>