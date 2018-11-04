const TEMPERATURE_ADJUSTMENT_INTERVAL_MS = 3000;
const TEMPERATURE_VARIANCE = 0.1;

class Thermometer {
  constructor(initialTemperature) {
    this.temperature = initialTemperature;
    setInterval(() => {
      this.adjustTemperature();
    }, TEMPERATURE_ADJUSTMENT_INTERVAL_MS);
  }

  /**
   * @return {Thermometer}
   */
  adjustTemperature() {
    const max = TEMPERATURE_VARIANCE;
    const min = - TEMPERATURE_VARIANCE;
    this.temperature += Math.random() * (max - min) + min;
    return this;
  }

  /**
   * @param {number} val
   * @return {Thermometer}
   */
  setTemperature(val) {
    this.temperature = val;
    return this;
  }

  /**
   * @return {number}
   */
  getTemperature() {
    return this.temperature;
  }
}

export default Thermometer;
