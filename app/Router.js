import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TestComponent from './components/TestComponent';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar="true">
      <Scene key="login" component={LoginForm} initial />
      <Scene key="test" component={TestComponent} />
    </Scene>
  </Router>
);

export default RouterComponent;
