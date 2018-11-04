class Interval {
  /**
   * @param {number} a
   * @param {number} b
   */
  constructor(a, b) {
    this.a = a;
    this.b = b;
    if (a > b) throw new Error('invalid interval.');
  }

  /**
   * @return {number}
   */
  getSize() {
    return this.b - this.a;
  }

  /**
   * @param {number} number
   * @param {Interval} interval
   * @return {number}
   */
  scaleNumberToOtherInterval(number, interval) {
    const ratio = interval.getSize() / this.getSize();
    return (ratio * number) - (ratio * this.a) + interval.a;
  }

  /**
   * @param {number} step
   * @param {Function} cb
   * @return {Array<any>}
   */
  map(step, cb) {
    const values = [];
    for(let i=this.a ; i<this.b ; i+= step) values.push(i);
    return values.map(cb);
  }
}

export default Interval;