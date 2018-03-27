import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Button extends Component {
  render() {
    const styles = StyleSheet.create({
      button: {
        backgroundColor: isDangerZone ? '#E07171' : '#EF8354',
        borderRadius: 4,
        padding: 12,
        alignItems: 'center',
        margin: 13
      },
      text: {
        color: '#FFC1A7',
        fontWeight: '400',
        fontSize: 15
      }
    });

    const { isDangerZone, text, onClick } = this.props;

    return (
      <TouchableOpacity
        onPress={onClick}
        style={styles.button}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  isDangerZone: false
};
