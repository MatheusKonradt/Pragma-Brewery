import Coord from './Coord';
import CoordSpace from './CoordSpace';
import Interval from './Interval';

test('should transform coord from one space to another', () => {
  const coord = new Coord(0, 5);
  const spaceA = new CoordSpace(new Interval(1, 5), new Interval(3, 12));
  const spaceB = new CoordSpace(new Interval(1, 5), new Interval(-8, 12));
  coord.setSpace(spaceA);
  coord.transformSpace(spaceB);
  expect(coord).toMatchSnapshot();
});
