import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';


export default class ActionButton extends Component {
  render() {
    const { isDangerZone, text, onPress } = this.props;

    const styles = StyleSheet.create({
      button: {
        backgroundColor: isDangerZone ? '#E07171' : '#EF8354',
        borderRadius: 4,
        padding: 10,
        width: '100%'
      },
      text: {
        color: isDangerZone ? '#FFC3C3' : '#FFC1A7',
        fontSize: 15,
        textAlign: 'center'
      }
    });

    return (
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableHighlight>
    );
  }
}

ActionButton.defaultProps = {
  isDangerZone: false
};
