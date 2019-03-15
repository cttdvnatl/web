import React, { Component } from 'react';
import Header from '../components/Header';
import CarouselComp from '../components/Carousel/CarouselComp';
import CardComp from "../components/Card/CardComp";
import ScheduleComp from "../components/Schedule/MassScheduleComp";

//import PropTypes from 'prop-types';

export default class Home extends Component {
  componentDidMount() {
    //This is to handle login or fetch info
  }

  render() {

    return (
      <div className="App">

        <Header />
        <CarouselComp />
        <ScheduleComp />
        <CardComp />
        
      </div>
    )
  }
}
