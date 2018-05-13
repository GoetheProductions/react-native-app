import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class CustomerDashboard extends Component {
  render() {
    const styles = StyleSheet.create({
      wrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#3D3D3D',
        flex: 10
      },
    });

    const { wrapper } = styles;

    return (
      <View style={wrapper}>
        <Text>content</Text>
      </View>
    );
  }
}

export default CustomerDashboard;
