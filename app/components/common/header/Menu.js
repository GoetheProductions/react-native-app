import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    padding: 7
  },
  placeholderStyles: { height: 1, width: 1 }
});

export default class ShipsterMenu extends Component {
  render() {
    const { wrapper, placeholderStyles } = styles;
    const { back, subMenu, onPress } = this.props;
    const placeholder = (<View style={placeholderStyles} />);

    return (
      <View style={wrapper}>
        {back ? <Icon name="angle-left" size={31} color="white" onPress={() => Actions.pop()} style={subMenu} /> : placeholder}
        {subMenu && (
          <Icon
            name="ellipsis-h"
            size={31}
            color="white"
            onPress={onPress}
          />
        )}
      </View>
    );
  }
}
