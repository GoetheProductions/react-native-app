import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image, Text, Platform, Linking } from 'react-native';
import SafariView from 'react-native-safari-view';
import SocialLogin from './components/login';
import { techtable } from '../constants';


class App extends Component {
  constructor() {
    super();

    this.state = {
      user: undefined,
    };

    this.handleOpenURL = this.handleOpenURL.bind(this);
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
    this.openURL = this.openURL.bind(this);
  }

  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', () => this.handleOpenURL());
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  }

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', () => this.handleOpenURL());
  }

  handleOpenURL({ url }) {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    this.setState({
      // Decode the user string and parse it into JSON
      user: JSON.parse(decodeURI(user_string))
    });
    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  }

  loginWithFacebook() {
    return this.openURL('https://localhost:3000/api/v1/auth/user/facebook/');
  }

  // Handle Login with Google button tap
  loginWithGoogle() {
    return this.openURL('https://localhost:3000/api/v1/auth/user/google');
  }

  openURL(url) {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url,
        fromBottom: true,
      });
    } else {
      Linking.openURL(url);
    }
  }

  render() {
    const { user } = this.state;
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
        <SocialLogin
          type="google-plus-official"
          title="Log ind med Google"
          onPress={() => this.loginWithGoogle()}
        />
      </View>
    );
  }
}

export default App;

