import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image, Text } from 'react-native';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import SocialLogin from './components/login';
import { techtable } from '../constants';
import secureStorage from './utils/secureStorage';


class App extends Component {
  loginWithFacebook = () => {
    LoginManager.logInWithReadPermissions(['email', 'public_profile'])
      .then((result) => {
        if (result.isCancelled) {
          console.log('Login was cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              secureStorage(data.accessToken.toString());
            }
          );
        }
      },
      (error) => console.log('error', error)
      );
  }

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
