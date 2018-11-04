import React from 'react';
import './App.sass';
import HeaderBar from './components/HeaderBar';
import Card from './components/Card';
import Grid from './components/Grid';
import GridItem from './components/GridItem';
import ThermometersFacade from './services/ThermometersFacade';
import Text from './components/Text';
import ContainerCard from './components/ContainerCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      measurements: [],
    };
    this.classes = {
      containerCardGrid: 'containerCardGrid',
    };

    const thermometers = ThermometersFacade.getInstance();
    const measurements = thermometers.getMeasurements();
    this.setState({ measurements });
    setInterval(() => {
      const measurements = thermometers.getMeasurements();
      this.setState({ measurements });
    }, 5000);
  }

  componenDidMount() {

  }


  render() {
    return (
      <div className="App">
        <HeaderBar />
        <Grid>
          {this.state.measurements.map(measurement => (<GridItem key={measurement.containerId} className={this.classes.containerCardGrid}><ContainerCard {...measurement} /></GridItem>))}
        </Grid>
      </div>
    );
  }
}

export default App;
