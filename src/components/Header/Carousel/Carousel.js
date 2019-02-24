import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';

const pictures  = [
    {
        altText: 'Church Exterior picture',
        src: '/images/exterior.jpg',
        caption: 'Church Buildings'
    },
    {
        altText: 'Church Interior picture',
        src: '/images/interior.jpg',
        caption: 'Church Buildings 2'
    }
];
const Carousel = () =><UncontrolledCarousel items={pictures}/>;

export default Carousel;