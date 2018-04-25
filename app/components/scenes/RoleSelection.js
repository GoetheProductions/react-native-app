import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { techtable } from '../../../constants';
import Button from '../action_button';

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
      <View style={styles.wrapper}>
        <Image style={styles.image} source={techtable} />
        <Text style={styles.text}>JEG VIL</Text>
        <Button text={'HAVE LEVERET'} onPress={() => console.log('button one')} />
        <Text style={styles.text}>ELLER</Text>
        <Button text={'VÆRE SHIPPER'} onPress={() => console.log('button two')} />
      </View>
    );
  }
}

export default RoleSelection;
