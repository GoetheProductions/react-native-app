import React, { Component } from 'react';

import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Header from './components/header';
import ActionButton from './components/action_button';
import { bgImage } from './components/header/constants';

export default class App extends Component {
  render() {
    const isCustomer = true;
    const styles = StyleSheet.create({
      wrapper: {
        backgroundColor: isCustomer ? '#3D3D3D' : '#EDEDED',
        display: 'flex',
        width: '100%',
        height: '100%'
      }
    });
    const { wrapper } = styles;

    return (
      <View style={wrapper}>
        <StatusBar barStyle="light-content" />
        <Header text="STAM INFORMATION" source={bgImage} />

        <View>
          <ActionButton isDangerZone={false} text="GEM ÆNDRINGER" />
        </View>
      </View>
    );
  }
}
