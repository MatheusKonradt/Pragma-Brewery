import React from 'react';
import renderer from 'react-test-renderer';
import Card from "./Card";

test('Should match snapshot', () => {
  const component = renderer.create(
    <Card />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should match snapshot with children nodes', () => {
  const component = renderer.create(
    <Card>
      <p>Testing</p>
    </Card>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});