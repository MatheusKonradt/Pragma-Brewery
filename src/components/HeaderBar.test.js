import React from 'react';
import HeaderBar from './HeaderBar';
import renderer from 'react-test-renderer';

test('Should match snapshot', () => {
  const component = renderer.create(
    <HeaderBar />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});