import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../../TabNavigator';
import Payment from '../screens/reservarLocker/PaymentPage';
import SendOrReceive from '../screens/reservarLocker/SendOrReceive';

import Success from '../screens/reservarLocker/SuccessPage'
import Login from './AppBase';


const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} hideNavBar={true} />
      <Scene key="login" component={Login} title="Login" hideNavBar={true} />
      <Scene key="sendReceive" component={SendOrReceive} title="SendOrReceive" hideNavBar={true} />
      <Scene key="payment" component={Payment} title="Payment" hideNavBar={true} />
   
      <Scene key="success" component={Success} title="Success" hideNavBar={true} />
    </Scene>
  </Router>
);
export default Routes;
