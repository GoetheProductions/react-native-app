import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../common/action_button';
import Wrapper from '../common/wrapper';
import { foodtable } from '../../../constants';

class RoleSelection extends Component {
  render() {
    const styles = StyleSheet.create({
      wrapper: {
        height: '100%',
        width: '100%',
        position: 'relative',
        justifyContent: 'center'
      },
      image: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
      },
      text: {
        fontFamily: 'SignPainter HouseScript',
        color: 'white',
        textAlign: 'center'
      }
    });
    return (
      <Wrapper
        headerHeadline={'OVERSIGT'}
        source={foodtable}
        subMenu
      >
        <Button text={'GEM ÆNDRINGER'} onPress={() => Actions.roleSelection()} />
      </Wrapper>
    );
  }
}

export default RoleSelection;
