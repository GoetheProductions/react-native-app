import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    padding: 7
  }
});

const Menu = props => {
  const { wrapper } = styles;
  return (
    <View style={wrapper}>
      <Icon name="angle-left" size={31} color="white" />
      <Icon name="ellipsis-h" size={31} color="white" />
    </View>
  );
};

export default Menu;
