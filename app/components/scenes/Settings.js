import React, { Component } from 'react';
import Wrapper from '../common/wrapper';
import { gears } from '../../../constants';
import List from '../common/list';

class Settings extends Component {
  render() {
    return (
      <Wrapper {...this.props} source={gears} subMenu>
        <List />
      </Wrapper>
    );
  }
}

export default Settings;
