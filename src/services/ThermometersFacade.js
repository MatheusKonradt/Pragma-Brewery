import EventEmitter from 'events';
import _ from 'lodash';

class ThermometersFacade extends EventEmitter {
  /**
   * @return {ThermometersFacade}
   */
  static getInstance() { // Singleton factory
    if (ThermometersFacade.INSTANCE) {
      return ThermometersFacade.INSTANCE;
    }
    ThermometersFacade.INSTANCE = new ThermometersFacade();
    window.ThermometersFacade = ThermometersFacade;
    return ThermometersFacade.INSTANCE;
  }

  constructor() {
    super();
    this.measurements = [
      {
        containerId: 'Pilsner', temperature: 5, min: 4, max: 6,
      },
      {
        containerId: 'IPA', temperature: 5, min: 4, max: 5,
      },
      // { containerId: '#2', temperature: 4 },
      // { containerId: '#3', temperature: 4 },
      // { containerId: '#4', temperature: 4 },
      // { containerId: '#5', temperature: 4 },
      // { containerId: '#6', temperature: 4 },
      // { containerId: '#7', temperature: 4 },
      // { containerId: '#8', temperature: 4 },
      // { containerId: '#9', temperature: 4 },
      // { containerId: '#10', temperature: 4 },
    ];
  }

  /**
   * @return {Array<{containerId: string, temperature: number}>}
   */
  getMeasurements() {
    const max = 0.1;
    const min = -0.1;
    for (const measurement of this.measurements) {
      measurement.temperature += Math.random() * (max - min) + min;
    }
    return this.measurements;
  }
}

ThermometersFacade.MAX_HISTORIC_SIZE = 50;

export default ThermometersFacade;
