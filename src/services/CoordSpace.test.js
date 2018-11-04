import CoordSpace from './CoordSpace';
import Interval from './Interval';
import Coord from './Coord';

test('Should transform coordinates from a space to another', () => {
  const coordSpaceA = new CoordSpace(new Interval(0, 5), new Interval(0, 20));
  const coordSpaceB = new CoordSpace(new Interval(0, 10), new Interval(10, 15));
  const coord = new Coord(4, 15);
  const transformedCoord = coordSpaceA.transformCoordSpace(coord, coordSpaceB);
  expect(transformedCoord).toMatchSnapshot();
});
