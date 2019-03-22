import React from 'react';
import renderer from 'react-test-renderer';
import CardComp from './CardComp';


it('Card should render correctly', () => {
    const component = renderer.create(
        <CardComp />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})