import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

class Wrapper extends Component {
  render() {
    const invert = true;
    const styles = StyleSheet.create({
      wrapper: {
        backgroundColor: invert ? '#3D3D3D' : '#EDEDED',
        display: 'flex',
        width: '100%',
        height: '100%'
      }
    });
    const { wrapper } = styles;
    const { children } = this.props;

    return (
      <View style={wrapper}>
        <StatusBar barStyle={invert ? 'light-content' : 'dark-content'} />
        {children}
      </View>
    );
  }
}

export default Wrapper;
