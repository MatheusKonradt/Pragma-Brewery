
class Coord {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {CoordSpace} val
   * @return {Coord}
   */
  setSpace(val) {
    this.space = val;
    return this;
  }

  /**
   * @param {CoordSpace} toSpace
   * @return {Coord}
   */
  transformSpace(toSpace) {
    const coord = this.space.transformCoordSpace(this, toSpace);
    this.x = coord.x;
    this.y = coord.y;
    this.setSpace(toSpace);
    return this;
  }

  /**
   * @return {Coord}
   */
  invertYAxis() {
    this.y = this.space.yInterval.b - this.y;
    return this;
  }
}

export default Coord;
