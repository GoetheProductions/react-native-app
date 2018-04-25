import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import SocialLogin from '../login';
import { techtable } from '../../../constants';
import secureStorage from '../../utils/secureStorage';


class LoginForm extends Component {
  loginWithFacebook = () => {
    LoginManager.logInWithReadPermissions(['email', 'public_profile'])
      .then((result) => {
        if (result.isCancelled) {
          console.log('Login was cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              // set token
              secureStorage(data.accessToken.toString());
              if (data) {
                Actions.moreInfo(); // route to navigate to
              }

              // send request to backend via redux
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

export default LoginForm;
