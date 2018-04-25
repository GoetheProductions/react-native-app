import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/scenes/Login';
import RoleSelection from './components/scenes/RoleSelection';
import MoreInfo from './components/scenes/MoreInfo';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar="true">
      <Scene key="login" component={Login} initial />
      <Scene key="moreInfo" component={MoreInfo} />
      <Scene key="roleSelection" component={RoleSelection} />
    </Scene>
  </Router>
);

export default RouterComponent;
