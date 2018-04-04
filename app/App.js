import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image, Text } from 'react-native';
import SocialLogin from './components/login';
import { techtable } from '../constants';


class App extends Component {
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
        <StatusBar barStyle={'light-content'} />
        <Image style={styles.image} source={techtable} />
        <Text style={styles.text}>Log ind på Shipster</Text>

        <SocialLogin
          type="facebook"
          title="Log ind med Facebook"
          onPress={() => this.loginWithFacebook()}
        />
      </View>
    );
  }
}

export default App;

/*
  <SocialLogin
    type="google-plus-official"
    title="Log ind med Google"
    onPress={() => this.loginWithGoogle()}
  />
*/

