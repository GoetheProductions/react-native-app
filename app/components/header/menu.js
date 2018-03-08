import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './menu.style';

const Menu = props => {
  const { menu, icon, iconWrapper, test } = styles;
  console.log('some stugg')
  return (
    <View style={test}>
      <Text>Some text</Text>
    </View>
  );
};

export default Menu;

/*
      <View style={iconWrapper}>
        <Icon style={icon} name="angle-left" size={31} color="white" />
      </View>
      <View style={iconWrapper}>
        <Icon style={icon} name="ellipsis-h" size={31} color="white" />
      </View>
*/
