import React, { Component } from 'react';
import { SocialIcon } from 'react-native-elements';

export default class SocialLogin extends Component {
  handleLogin() {
    console.log('clicked');
  }

  render() {
    const { type, title } = this.props;

    return (
      <SocialIcon
        style={{ borderRadius: 4 }}
        title={title}
        button
        type={type}
        onPress={() => this.handleLogin()}
      />
    );
  }
}
