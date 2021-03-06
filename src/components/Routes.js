import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../../TabNavigator';
import About from './AppBase';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} hideNavBar={true} />
      <Scene key="about" component={About} title="About" hideNavBar={true} />
    </Scene>
  </Router>
);
export default Routes;
