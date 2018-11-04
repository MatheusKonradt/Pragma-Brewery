import React from 'react';
import _ from 'lodash';
import './App.sass';
import HeaderBar from './components/HeaderBar';
import Card from './components/Card';
import Grid from './components/Grid';
import GridItem from './components/GridItem';
import ThermometersFacade from './services/ThermometersFacade';
import Text from './components/Text';
import ContainerCard from './components/ContainerCard';
import alarm from './media/alarm.mp3';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import DashboardView from './views/DashboardView';
import Icon from './components/Icon';
import ThermometersView from './views/ThermometersView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.classes = {
      root: 'App',
      list: 'list'
    }
  }

  render() {
    return (
      <Router>
        <div className={this.classes.root}>
          <HeaderBar>
            <ul className={this.classes.list}>
              <li><Link to='/dashboard'><Icon name="dashboard" size={36} /><Text variant="span">Dashboard</Text></Link></li>
              <li><Link to='/thermometers'><Icon name="build" size={36} /><Text variant="span">Thermometers</Text></Link></li>
            </ul>
          </HeaderBar>
          <Route exact path="/" component={DashboardView} />
          <Route exact path="/dashboard" component={DashboardView} />
          <Route exact path="/thermometers" component={ThermometersView} />
        </div>
      </Router>
    );
  }
}

export default App;
