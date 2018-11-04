import React from 'react';
import PropTypes from 'prop-types';
import './ContainerCard.sass';
import Card from "../components/Card";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";
import Text from "../components/Text";
import Graph from "../components/Graph";

class ContainerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.classes = {
      root: 'ContainerCard',
      tempDisplay: 'tempDisplay',
    };
    this.themes = {};
  }

  render() {
    const classes = [this.classes.root, this.props.className].join(' ');
    return (
      <Card className={classes}>
        <Grid>
          <GridItem xs={3} ys={3}>
            <Text variant="h3">{this.props.containerId}</Text>
          </GridItem>
          <GridItem xs={5} ys={3}>
            <Text variant="h3">{this.props.min}ºC - {this.props.max}ºC</Text>
          </GridItem>
          <GridItem xs={4} ys={3} className={this.classes.tempDisplay}>
            <Text variant="h2">{this.props.temperature.toFixed(1)}ºC</Text>
          </GridItem>
          <GridItem xs={12} ys={9}>
            <Graph value={this.props.temperature} min={this.props.min} max={this.props.max}/>
          </GridItem>
        </Grid>
      </Card>
    );
  }
}

ContainerCard.defaultProps = {
  themes: {},
  className: '',
  containerId: '',
  temperature: null,
};

ContainerCard.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
  containerId: PropTypes.string,
  temperature: PropTypes.number,
};

export default ContainerCard;