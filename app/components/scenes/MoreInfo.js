import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../common/action_button';
import Wrapper from '../common/wrapper';
import { foodtable } from '../../../constants';
import Input from '../common/input';


export default class MoreInfo extends Component {
  render() {
    const styles = StyleSheet.create({
      wrapper: {
        height: '100%',
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
        flex: 1
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
        hideMenu
        headerHeadline={'OVERSIGT'}
        source={foodtable}
        subMenu
      >
        <Input placeholder="Navn" icon="user" />
        <Input placeholder="Email" icon="envelope" keyboardType={'email-address'} />
        <Input placeholder="Adresse" icon="map-marker" />
        <Input placeholder="Postnummer" icon="map-marker" keyboardType={'numeric'} />
        <Button text={'GEM ÆNDRINGER'} onPress={() => Actions.roleSelection()} />
      </Wrapper>
    );
  }
}

