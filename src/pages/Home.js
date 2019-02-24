import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
//import PropTypes from 'prop-types';

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
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>Home Page</h1>
      </header>
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
