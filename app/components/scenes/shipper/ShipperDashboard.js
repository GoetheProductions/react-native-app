import React, { Component } from 'react';
import Wrapper from '../../common/wrapper';
import { coffeetable } from '../../../../constants';
import List from '../../common/list';

class ShipperDashboard extends Component {
  render() {
    console.log('props ', this.props);
    return (
      <Wrapper {...this.props} source={coffeetable} subMenu>
        <List />
      </Wrapper>
    );
  }
}

export default ShipperDashboard;
