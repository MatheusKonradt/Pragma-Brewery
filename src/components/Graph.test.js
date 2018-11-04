import React from 'react';
import renderer from 'react-test-renderer';
import Graph from './Graph';

test('Should match snapshot', () => {
  const component = renderer.create(
    <Graph />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
