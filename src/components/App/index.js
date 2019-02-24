import React, { Component } from 'react';
import Navigation from "../Header/Nav/Navigation";
import Carousel from "../Header/Carousel/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="navigation">
            <Navigation />
          </div>
          <div className="Carousel">
            <Carousel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
