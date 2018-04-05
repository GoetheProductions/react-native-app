import React, { Component } from 'react';
import { SocialIcon } from 'react-native-elements';

export default class SocialLogin extends Component {
  render() {
    const { type, title, onPress } = this.props;

    return (
      <SocialIcon
        style={{ borderRadius: 4 }}
        title={title}
        button
        type={type}
        onPress={onPress}
      />
    );
  }
}
