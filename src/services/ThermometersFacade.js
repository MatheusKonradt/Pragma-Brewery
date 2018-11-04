import EventEmitter from 'events';
import _ from 'lodash';
import Thermometer from './Thermometer';
import containers from './containers';

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
    this.containers = containers;
    this.thermomethers = [
      new Thermometer(5),
      new Thermometer(4.5),
      new Thermometer(5.2),
      new Thermometer(7),
      new Thermometer(4),
      new Thermometer(5),
    ]
  }

  /**
   * @return {Thermometer[]}
   */
  getThermometers() {
    return this.thermomethers;
  }

  /**
   * @return {Array<{containerId: string, temperature: number}>}
   */
  getMeasurements() {
    for (const container of this.containers) {
      container.temperature = this.thermomethers[container.thermometerId].getTemperature();
      container.isOutsideTemperatureRange = container.temperature > container.max || container.temperature < container.min
    }
    return this.containers;
  }
}

ThermometersFacade.MAX_HISTORIC_SIZE = 50;

export default ThermometersFacade;
