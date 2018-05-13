import React, { Component } from 'react';
import Wrapper from '../../common/wrapper';
import { coffeetable } from '../../../../constants';
import List from '../../common/list';

class CustomerDashboard extends Component {
  render() {
    return (
      <Wrapper {...this.props} source={coffeetable} subMenu>
        <List />
      </Wrapper>
    );
  }
}

export default CustomerDashboard;
