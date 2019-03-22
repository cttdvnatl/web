import React from 'react';
import renderer from 'react-test-renderer';
import CarouselComp from './CarouselComp';


it('Carousel should render correctly', () => {
    const component = renderer.create(
        <CarouselComp />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})