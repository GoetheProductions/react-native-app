import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Button extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  render() {
    const styles = StyleSheet.create({
      input: {
        backgroundColor: '#4B4B4B',
        height: 41,
        padding: 12,
        margin: 13,
        color: '#6F6F6F',
        borderRadius: 4,
        fontSize: 11
      }
    });

    return ( // Add icon prop
      <TextInput
        style={styles.input}
        onChangeText={text => this.setState({ text })}
      />
    );
  }
}

Button.defaultProps = {
  isDangerZone: false
};
