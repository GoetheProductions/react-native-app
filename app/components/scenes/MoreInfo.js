import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../action_button';
import Header from '../header';
import { coffeetable } from '../../../constants';

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
        <Header text="STAM INFORMATION" source={coffeetable} />
        <Button text={'GEM ÆNDRINGER'} onPress={() => Actions.roleSelection()} />
      </View>
    );
  }
}

export default RoleSelection;
