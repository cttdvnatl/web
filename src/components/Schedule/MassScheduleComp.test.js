import React from 'react';
import renderer from 'react-test-renderer';
import MassScheduleComp from './MassScheduleComp';


it('MassSchedule should render correctly', () => {
    const component = renderer.create(
        <MassScheduleComp />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})