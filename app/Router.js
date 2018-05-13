import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/scenes/Login';
import RoleSelection from './components/scenes/RoleSelection';
import MoreInfo from './components/scenes/MoreInfo';
import CustomerDashboard from './components/scenes/customer/CustomerDashboard';
import ShipperDashboard from './components/scenes/shipper/ShipperDashboard';
import NewOrder from './components/scenes/customer/NewOrder';
import Settings from './components/scenes/Settings';
import Profile from './components/scenes/Profile';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar="true">
      <Scene key="login" component={Login} />
      <Scene key="moreInfo" component={MoreInfo} />
      <Scene key="roleSelection" component={RoleSelection} />

      <Scene
        key="customerDashboard"
        component={CustomerDashboard}
        title="OVERSIGT"
        screenProps={{
          type: 'customer'
        }}
      />
      <Scene
        key="newOrder"
        component={NewOrder}
        title="BESTIL VARER"
        screenProps={{
          type: 'customer'
        }}
      />
      <Scene
        key="settings"
        component={Settings}
        title="INDSTILLINGER"
        screenProps={{
          type: 'customer'
        }}
      />
      <Scene
        key="profile"
        component={Profile}
        title="PROFIL"
        initial
        screenProps={{
          type: 'customer'
        }}
      />


      <Scene
        key="shipperDashboard"
        component={ShipperDashboard}
        title="IGANGVÆRENDE ORDRE"
        screenProps={{
          type: 'shipper'
        }}
      />
    </Scene>
  </Router>
);

export default RouterComponent;
