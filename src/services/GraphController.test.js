import GraphController from './GraphController';
import Interval from './Interval';

test('should map values to coordinates', () => {
  const controller = new GraphController(null);
  controller.setYInterval(new Interval(3, 8));
  controller.setXInterval(new Interval(0, 10));
  controller.$canvas = { width: 300, height: 150 };
  controller.refreshCanvasSpace();
  controller
    .addValue(4)
    .addValue(5)
    .addValue(3)
    .addValue(9);
  const coords = controller.getValuesCoords();
  expect(coords).toMatchSnapshot();
});

test('should recreate canvas space', () => {
  const controller = new GraphController(null);
  controller.$canvas = { width: 300, height: 150 };
  controller.refreshCanvasSpace();
  expect(controller.canvasCoordSpace).toMatchSnapshot();
});

test('should respect maxDisplayedValues when adding new values', () => {
  const controller = new GraphController(null);
  controller.setMaxDisplayedValues(4);
  controller
    .addValue(4)
    .addValue(5)
    .addValue(3)
    .addValue(8)
    .addValue(9);
  expect(controller.values.length).toBe(4);
  expect(controller.values).toMatchSnapshot();
});

test('should update graph scale acordingly to max and min value', () => {
  const controller = new GraphController(null);
  controller.values = [1, 3, 4, 6, 7, -1, 3, 8]; // MAX is 8, MIN is -1
  controller.setMinYInterval(new Interval(3, 5)); // Should not affect result since this interval is contained in [-1, 8]
  controller.updateYIntervalUsingHistoricValues();
  expect(controller.yInteval).toMatchSnapshot();
});
