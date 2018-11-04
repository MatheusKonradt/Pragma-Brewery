import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './Graph.sass';
import GraphController from "../services/GraphController";
import Interval from "../services/Interval";

const MAX_DISPLAYED_VALUES = 20;

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.classes = {
      root: 'Graph',
    };
    this.themes = {};
  }

  componentDidMount() {
    this.controller = new GraphController(this.$canvas.current);
    this.controller.setYInterval(new Interval(0, 8));
    this.controller.setXInterval(new Interval(0, MAX_DISPLAYED_VALUES));
    this.controller.setMinYInterval(new Interval(this.props.min, this.props.max));
    this.controller.setMaxDisplayedValues(MAX_DISPLAYED_VALUES);
    this.controller.draw();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.controller) return;
    this.controller.addValue(_.round(nextProps.value, 1));
  }

  componentDidUpdate() {
    this.controller.draw();
  }

  render() {
    const classes = [this.classes.root, this.props.className].join(' ');
    this.$canvas = React.createRef();
    return (
      <canvas ref={this.$canvas} className={classes} style={this.props.themes.root} />
    );
  }
}

Graph.defaultProps = {
  themes: {},
  className: '',
  value: 4,
  min: 3,
  max: 5,
};

Graph.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default Graph;
