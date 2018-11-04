import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import App from './App';
import GraphController from './services/GraphController';
import { stubGraphControllerSetCanvas } from '../test.helper';

const sandbox = sinon.createSandbox();

afterEach(() => {
  sandbox.restore();
});

test('renders without crashing', () => {
  sandbox.stub(GraphController.prototype, 'setCanvas').callsFake(stubGraphControllerSetCanvas);
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
