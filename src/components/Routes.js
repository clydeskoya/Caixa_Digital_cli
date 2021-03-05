import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../../TabNavigator';
import About from './AppBase';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} options={{ headerShown: false }} />
      <Scene key="about" component={About} title="About" options={{ headerShown: false }} />
    </Scene>
  </Router>
);
export default Routes;
