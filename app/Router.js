import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/scenes/Login';
import RoleSelection from './components/scenes/RoleSelection';
import MoreInfo from './components/scenes/MoreInfo';
import CustomerDashboard from './components/scenes/customer/CustomerDashboard';
import ShipperDashboard from './components/scenes/shipper/ShipperDashboard';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar="true">
      <Scene key="login" component={Login} />
      <Scene key="moreInfo" component={MoreInfo} />
      <Scene key="roleSelection" component={RoleSelection} initial />

      <Scene key="customerDashboard" component={CustomerDashboard} title="OVERSIGT" />
      <Scene key="shipperDashboard" component={ShipperDashboard} title="PROFIL" />
    </Scene>
  </Router>
);

export default RouterComponent;
