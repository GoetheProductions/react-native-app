import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  // wrapper: {
  //   paddingTop: getStatusBarHeight(),
  // },
  image: {
    top: getStatusBarHeight(),
    height: 131,
    width: '100%',
  },
  // text: {
  //   color: '#fff',
  //   fontWeight: '800',
  //   fontSize: 25,
  //   backgroundColor: 'transparent',
  //   textAlign: 'center',
  //   position: 'relative'
  // },
  // textWrapper: {
  //   position: 'absolute',
  //   width: '100%',
  //   top: '50%'
  // },

});

export default styles;
