import React from 'react';
import { View, StyleSheet } from 'react-native';
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
  }
});

const Menu = props => {
  const { wrapper } = styles;
  return (
    <View style={wrapper}>
      {props.back && <Icon name="angle-left" size={31} color="white" onPress={() => Actions.pop()} />}
      {props.subMenu && <Icon name="ellipsis-h" size={31} color="white" />}
    </View>
  );
};

export default Menu;
