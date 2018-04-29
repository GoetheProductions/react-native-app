import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class CustomerDashboardOverview extends Component {
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
        <Text style={styles.text}>OVERVIEW</Text>
      </View>
    );
  }
}

export default CustomerDashboardOverview;
