import React from 'react';
import PropTypes from 'prop-types';
import './ThermometersView.sass';
import Grid from '../components/Grid';
import ThermometersFacade from '../services/ThermometersFacade';
import GridItem from '../components/GridItem';
import Card from '../components/Card';
import Text from '../components/Text';
import Icon from '../components/Icon';

class ThermometersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thermometers: []
    };
    this.classes = {
      root: 'ThermometersView',
      card: 'card',
      icon: 'icon'
    };
    this.themes = {};
  }

  refreshTemperatures() {
    const thermometers = ThermometersFacade.getInstance().getThermometers();
    this.setState({ thermometers })
  }

  onClickIcon(thermomether) {
    const value = parseFloat(window.prompt('New temperature?'));
    if (isNaN(value)) return alert('Not a number!');
    thermomether.setTemperature(value);
    this.refreshTemperatures();
  }

  componentDidMount() {
    this.refreshTemperatures();
    this.refreshInterval = setInterval(this.refreshTemperatures.bind(this), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  render() {
    const classes = [this.classes.root, this.props.className].join(' ');
    return (
      <div className={classes} style={this.props.themes.root}>
        <Grid>
          {this.state.thermometers.map((thermomether, id) => (
            <GridItem key={id}>
              <Card className={this.classes.card}>
                <Grid>
                  <GridItem xs={4} va="middle"><Text variant="h3">Nº {id}</Text></GridItem>
                  <GridItem xs={4} va="middle"><Text variant="h3">{thermomether.getTemperature().toFixed(1)}ºC</Text></GridItem>
                  <GridItem xs={4} va="middle"><a onClick={() => this.onClickIcon(thermomether)}><Icon name="settings" className={this.classes.icon}/></a></GridItem>
                </Grid>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </div>
    );
  }
}

ThermometersView.defaultProps = {
  themes: {},
  className: '',
};

ThermometersView.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
};

export default ThermometersView;
