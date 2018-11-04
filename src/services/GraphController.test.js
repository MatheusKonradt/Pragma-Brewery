import GraphController from "./GraphController";
import Interval from "./Interval";

test('Should map values to coordinates', () => {
  const controller = new GraphController(null);
  controller.setYInterval(new Interval(3, 8));
  controller.setXInterval(new Interval(0, 10));
  controller.xCanvasInterval = new Interval(0, 300);
  controller.yCanvasInterval = new Interval(0, 150);
  controller
    .addValue(4)
    .addValue(5)
    .addValue(3)
    .addValue(9);
  const coords = controller.getValuesCoords();
  expect(coords).toMatchSnapshot();
});