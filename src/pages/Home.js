import React, { Component } from 'react'
import Header from '../components/Header';
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

    // TODO: remove image placeholder below when Hiep finishes carousel

    return (
      <div className="App">
        <div className="header-top">
        </div>

        <Header />

        <div
          class="container"
          style={{
                    backgroundImage: 'url(http://www.cttdvnatl.org/en/wp-content/uploads/2013/03/Faith-Banner-900x355.jpg)',
                    height: '400px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
        ></div>
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