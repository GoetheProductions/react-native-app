import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  wrapper: {
    width: '100%',
    height: '100%',
    zIndex: 100,
    position: 'absolute',
    top: getStatusBarHeight(),
    right: 0,
    display: 'flex',
    flexDirection: 'row',
  },

  darkened: {
    display: 'flex',
    backgroundColor: 'black',
    width: '50%',
    height: '100%',
    padding: 10,
    opacity: 0.2,
    zIndex: 200
  },

  list: {
    display: 'flex',
    backgroundColor: '#4B4B4B',
    width: '50%',
    height: '100%',
    padding: 10,
    flexDirection: 'column',

  },
  items: {
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  item: {
    justifyContent: 'center',
    padding: 5,
    margin: 5
  }
});

export default class ShipsterMenu extends Component {
  render() {
    const { menu, list, item, items, wrapper, darkened } = styles;
    return (
      <View style={wrapper}>
        <TouchableOpacity style={darkened} onPress={this.props.handleCloseMenu} />
        <View style={list}>
          <View style={menu}>
            <Icon onPress={this.props.handleCloseMenu} name="close" size={25} color="white" />
          </View>
          <View style={items}>
            <View style={item}>
              <Text>ITEM A</Text>
            </View>

            <View style={item}>
              <Text>ITEM B</Text>
            </View>

            <View style={item}>
              <Text>ITEM C</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
