import React from 'react';
import PropTypes from 'prop-types';
import './DashboardView.sass';
import alarm from '../media/alarm.mp3';
import HeaderBar from '../components/HeaderBar';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem';
import ContainerCard from '../components/ContainerCard';
import ThermometersFacade from '../services/ThermometersFacade';
import _ from 'lodash';

class DashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      measurements: []
    };
    this.classes = {
      root: 'DashboardView',
      containerCardGrid: 'containerCardGrid',
    };

    this.$audio = React.createRef();
  }

  refreshTemperatures() {
    const thermometers = ThermometersFacade.getInstance();
    const measurements = thermometers.getMeasurements();
    this.setState({ measurements });
    if (_.some(measurements, measurement => measurement.isOutsideTemperatureRange)) {
      this.$audio.current.play();
      // NOTE - Disabled the alarm sound due to it being too annoying.
    } else {
      this.$audio.current.pause();
    }
  }

  componentDidMount() {
    this.$audio.current.volume = 0.1;
    this.refreshTemperatures();
    this.refreshInterval = setInterval(this.refreshTemperatures.bind(this), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  render() {
    const classes = [this.classes.root, this.props.className].join(' ');
    return (
      <div className={classes} style={this.props.themes.root}>
        <audio ref={this.$audio} loop>
          <source src={alarm} />
        </audio>
        <Grid>
          {this.state.measurements.map(measurement => (
            <GridItem key={measurement.containerId} className={this.classes.containerCardGrid}>
              <ContainerCard {...measurement} />
            </GridItem>
          ))}
        </Grid>
      </div>
    );
  }
}

DashboardView.defaultProps = {
  themes: {},
  className: '',
};

DashboardView.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
};

export default DashboardView;
