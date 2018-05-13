import React, { Component } from 'react';
import { Text } from 'react-native';
import Wrapper from '../common/wrapper';
import { foodtable } from '../../../constants';

class NewOrder extends Component {
  render() {
    return (
      <Wrapper {...this.props} source={foodtable} subMenu>
        <Text>Here is my profile</Text>
      </Wrapper>
    );
  }
}

export default NewOrder;
