import React from 'react';
import {
  Image,
  View,
  Text
} from 'react-native';
import styles from './index.style';
import Menu from './menu';

const Header = props => {
  const { image, text } = styles;

  return (
    <View>
      <Image style={image} source={props.source} />
      <Menu />
      <Text style={text}>{props.text}</Text>
    </View>
  );
};

export default Header;
