import React from 'react';
import renderer from 'react-test-renderer';
import Graph from './Graph';
import sinon from 'sinon';
import GraphController from '../services/GraphController';

const sandbox = sinon.createSandbox();

afterEach(() => {
  sandbox.restore();
});

test('Should match snapshot', () => {
  const setCanvasStub = sandbox.stub(GraphController.prototype, 'setCanvas').returns();
  const drawStub = sandbox.stub(GraphController.prototype, 'draw').returns();
  const component = renderer.create(
    <Graph />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(setCanvasStub.calledOnce).toBe(true);
  expect(drawStub.calledOnce).toBe(true);
});
