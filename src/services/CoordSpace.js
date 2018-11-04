import Coord from "./Coord";

class CoordSpace {
  /**
   * @param {Interval} xInterval
   * @param {Interval} yInterval
   */
  constructor(xInterval, yInterval) {
    this.yInterval = yInterval;
    this.xInterval = xInterval;
  }

  /**
   * @param {Coord} coord
   * @param {CoordSpace} coordSpace
   * @return {Coord}
   */
  transformCoordSpace(coord, coordSpace) {
    const x = this.xInterval.scaleNumberToOtherInterval(coord.x, coordSpace.xInterval);
    const y = this.yInterval.scaleNumberToOtherInterval(coord.y, coordSpace.yInterval);
    return new Coord(x, y);
  }
}

export default CoordSpace;
