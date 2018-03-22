import React, { Component } from 'react';
import { Button } from 'react-native-elements';


export default class ActionButton extends Component {
  render() {
    const { isDangerZone, text } = this.props;

    return (
      <Button
        buttonStyle={{
          backgroundColor: isDangerZone ? '#E07171' : '#EF8354',
          borderRadius: 4,
          padding: 5
        }}
        textStyle={{
          color: isDangerZone ? '#FFC3C3' : '#FFC1A7',
          fontSize: 15,
        }}
        text={text}
      />
    );
  }
}

ActionButton.defaultProps = {
  isDangerZone: false
};
