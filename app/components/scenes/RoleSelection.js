import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { techtable } from '../../../constants';
import Button from '../common/action_button';

class RoleSelection extends Component {
  render() {
    const styles = StyleSheet.create({
      wrapper: {
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        padding: 13
      },
      image: {
        resizeMode: 'repeat',
        position: 'absolute',
      },
      text: {
        fontFamily: 'SignPainter HouseScript',
        color: 'white',
        textAlign: 'center'
      }
    });

    const { wrapper, image, text } = styles;
    return (
      <View style={wrapper}>
        <Image style={image} source={techtable} />
        <Text style={text}>JEG VIL</Text>
        <Button text={'HAVE LEVERET'} onPress={() => Actions.customerDashboard()} />
        <Text style={text}>ELLER</Text>
        <Button text={'VÆRE SHIPPER'} onPress={() => Actions.shipperDashboard()} />
      </View>
    );
  }
}

export default RoleSelection;
