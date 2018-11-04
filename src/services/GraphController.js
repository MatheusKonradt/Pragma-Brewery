import _ from 'lodash';
import Coord from './Coord';
import Interval from './Interval';
import CoordSpace from './CoordSpace';

class GraphController {
  /**
   * @param {HTMLCanvasElement} $canvas
   */
  constructor($canvas) {
    if ($canvas) this.setCanvas($canvas);
    this.values = [];
    this.setMaxDisplayedValues(15);
    this.setMarginOffset(0.3);
  }

  /**
   * @param {HTMLCanvasElement} $canvas
   * @return {GraphController}
   */
  setCanvas($canvas) {
    this.$canvas = $canvas;
    this.ctx = $canvas.getContext('2d');
    this.refreshCanvasSpace();
    return this;
  }

  /**
   * @param {number} val
   * @return {GraphController}
   */
  setMarginOffset(val) {
    this.marginOffset = val;
    return this;
  }

  /**
   * @param {Interval} val
   * @return {GraphController}
   */
  setXInterval(val) {
    this.xInterval = val;
    this.refreshVirtualSpace();
    return this;
  }

  /**
   * @param {Interval} val
   * @return {GraphController}
   */
  setYInterval(val) {
    this.yInteval = val;
    this.refreshVirtualSpace();
    return this;
  }

  /**
   * @param {Interval} val
   * @return {GraphController}
   */
  setMinYInterval(val) {
    this.minYInterval = val;
  }

  /**
   * @param val
   * @return {GraphController}
   */
  setMaxDisplayedValues(val) {
    this.maxDisplayedValues = val;
    return this;
  }

  /**
   * @return {GraphController}
   */
  refreshCanvasSpace() {
    this.xCanvasInterval = new Interval(0, this.$canvas.width);
    this.yCanvasInterval = new Interval(0, this.$canvas.height);
    this.canvasCoordSpace = new CoordSpace(this.xCanvasInterval, this.yCanvasInterval);
    return this;
  }

  /**
   * @param {number} val
   * @return {GraphController}
   */
  addValue(val) {
    this.values.push(val);
    if (this.values.length > this.maxDisplayedValues) {
      this.values.shift();
    }
    return this;
  }

  /**
   * @return {GraphController}
   */
  refreshVirtualSpace() {
    this.virtualCoordSpace = new CoordSpace(this.xInterval, this.yInteval);
    return this;
  }

  /**
   * @return {GraphController}
   */
  updateYIntervalUsingHistoricValues() {
    const maxHistoricValue = _.max(this.values);
    const minHistoricValue = _.min(this.values);
    const a = Math.min(minHistoricValue, this.minYInterval.a) - this.marginOffset;
    const b = Math.max(maxHistoricValue, this.minYInterval.b) + this.marginOffset;
    this.setYInterval(new Interval(a, b));
    return this;
  }

  /**
   * @param {Coord} from
   * @param {Coord} to
   * @param {number} lineWidth
   * @param {string} strokeStyle
   * @return {GraphController}
   */
  drawLine(from, to, lineWidth, strokeStyle) {
    this.ctx.beginPath();
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = strokeStyle;
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();
    return this;
  }

  /**
   * @return {GraphController}
   */
  clearCanvas() {
    this.ctx.clearRect(
      this.xCanvasInterval.a, this.yCanvasInterval.a,
      this.xCanvasInterval.b, this.yCanvasInterval.b,
    );
    return this;
  }

  /**
   * @return {GraphController}
   */
  drawFixedLines() {
    const step = this.yInteval.getSize() / 10;
    this.yInteval.map(step, (y) => {
      const fromCoord = new Coord(this.xInterval.a, y);
      fromCoord.setSpace(this.virtualCoordSpace);
      fromCoord.transformSpace(this.canvasCoordSpace);

      const toCoord = new Coord(this.xInterval.b, y);
      toCoord.setSpace(this.virtualCoordSpace);
      toCoord.transformSpace(this.canvasCoordSpace);

      this.drawLine(fromCoord, toCoord, 1, '#fff');
    });
    return this;
  }

  /**
   * @return {Coord[]}
   */
  getValuesCoords() {
    return this.values.map((value, i) => {
      const coord = new Coord(i, value);
      coord.setSpace(this.virtualCoordSpace);
      coord.transformSpace(this.canvasCoordSpace);
      coord.invertYAxis();
      return coord;
    });
  }

  /**
   * @return {GraphController}
   */
  drawLimitLines() {
    let fromCoord = new Coord(this.xInterval.a, this.minYInterval.a);
    fromCoord
      .setSpace(this.virtualCoordSpace)
      .transformSpace(this.canvasCoordSpace)
      .invertYAxis();

    let toCoord = new Coord(this.xInterval.b, this.minYInterval.a);
    toCoord
      .setSpace(this.virtualCoordSpace)
      .transformSpace(this.canvasCoordSpace)
      .invertYAxis();

    this.drawLine(fromCoord, toCoord, 2, '#f00');

    fromCoord = new Coord(this.xInterval.a, this.minYInterval.b);
    fromCoord
      .setSpace(this.virtualCoordSpace)
      .transformSpace(this.canvasCoordSpace)
      .invertYAxis();

    toCoord = new Coord(this.xInterval.b, this.minYInterval.b);
    toCoord
      .setSpace(this.virtualCoordSpace)
      .transformSpace(this.canvasCoordSpace)
      .invertYAxis();

    this.drawLine(fromCoord, toCoord, 2, '#f00');

    return this;
  }

  /**
   * @return {GraphController}
   */
  drawValuesLine() {
    const coords = this.getValuesCoords();
    let currentCoord = _.first(coords);
    coords.forEach((coord) => {
      this.drawLine(currentCoord, coord, 2, '#000');
      currentCoord = coord;
    });
    return this;
  }

  /**
   * @return {GraphController}
   */
  draw() {
    this.updateYIntervalUsingHistoricValues();
    this.clearCanvas();
    this.drawFixedLines();
    this.drawLimitLines();
    this.drawValuesLine();
    return this;
  }
}

export default GraphController;
