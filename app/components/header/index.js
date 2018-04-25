import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Menu from './Menu';


const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
    marginTop: getStatusBarHeight(),
    width: '100%',
    display: 'flex',
    height: 131,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  image: {
    position: 'absolute',
    top: 0,
    height: 131,
    width: '100%'
  },
  text: {
    color: 'white',
    fontWeight: '800',
    fontSize: 28
  }
});

const Header = props => {
  const { wrapper, image, text } = styles;

  return (
    <View style={wrapper}>
      <Image style={image} source={props.source} />
      <Menu />
      <Text style={text}>{props.text}</Text>
    </View>
  );
};

export default Header;

/* 
<Image style={image} source={props.source} />
  <Menu />
*/
