import Interval from './Interval';

test('Should scale numbers correctly', () => {
  let intervalA = new Interval(0, 200);
  let intervalB = new Interval(0, 400);
  let number = intervalA.scaleNumberToOtherInterval(10, intervalB);
  expect(number).toBe(20);
  number = intervalB.scaleNumberToOtherInterval(20, intervalA);
  expect(number).toBe(10);

  intervalA = new Interval(100, 200);
  intervalB = new Interval(0, 500);
  number = intervalA.scaleNumberToOtherInterval(100, intervalB);
  expect(number).toBe(0);
  number = intervalB.scaleNumberToOtherInterval(0, intervalA);
  expect(number).toBe(100);
  number = intervalA.scaleNumberToOtherInterval(150, intervalB);
  expect(number).toBe(250);
  number = intervalB.scaleNumberToOtherInterval(250, intervalA);
  expect(number).toBe(150);

  intervalA = new Interval(100, 200);
  intervalB = new Interval(300, 600);
  number = intervalA.scaleNumberToOtherInterval(120, intervalB);
  expect(number).toBe(360);
  number = intervalB.scaleNumberToOtherInterval(360, intervalA);
  expect(number).toBe(120);

  intervalA = new Interval(100, 200);
  intervalB = new Interval(0, 100);
  number = intervalA.scaleNumberToOtherInterval(50, intervalB);
  expect(number).toBe(-50);
  number = intervalB.scaleNumberToOtherInterval(-50, intervalA);
  expect(number).toBe(50);
});