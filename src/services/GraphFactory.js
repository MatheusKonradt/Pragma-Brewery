import GraphController from './GraphController';

class GraphFactory {
  /**
   * @param {string} containerId
   * @return {GraphController}
   */
  static getGraphControllerInstanceForContainerId(containerId) {
    if (GraphFactory.INSTANCES[containerId]) {
      return GraphFactory.INSTANCES[containerId];
    }
    const controller = new GraphController(null);
    GraphFactory.INSTANCES[containerId] = controller;
    return controller;
  }
}

GraphFactory.INSTANCES = {};

export default GraphFactory;
