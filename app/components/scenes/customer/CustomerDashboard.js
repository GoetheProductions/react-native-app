import React, { Component } from 'react';
import { Text } from 'react-native';
import Wrapper from '../../common/wrapper';
import { foodtable } from '../../../../constants';

class CustomerDashboard extends Component {
  render() {
    // const styles = StyleSheet.create({
    //   wrapper: {
    //     height: '100%',
    //     width: '100%',
    //     position: 'relative',
    //     justifyContent: 'center'
    //   },
    //   image: {
    //     flex: 1,
    //     height: '100%',
    //     width: '100%',
    //     position: 'absolute',
    //   },
    //   text: {
    //     fontFamily: 'SignPainter HouseScript',
    //     color: 'white',
    //     textAlign: 'center'
    //   }
    // });
    return (
      <Wrapper
        headerHeadline={'OVERSIGT'}
        source={foodtable}
        subMenu
      >
        <Text>Some derrb</Text>
      </Wrapper>
    );
  }
}

export default CustomerDashboard;
