import React, { Component } from 'react';
import Wrapper from '../../common/wrapper';
import { foodtable } from '../../../../constants';
import List from '../../common/list';

class NewOrder extends Component {
  render() {
    return (
      <Wrapper {...this.props} source={foodtable} subMenu>
        <List />
      </Wrapper>
    );
  }
}

export default NewOrder;
