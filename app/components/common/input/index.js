import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Input extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleInputChange = (val) => console.log(val);

  render() {
    const { placeholder, icon } = this.props;
    const styles = StyleSheet.create({
      wrapper: {
        flexDirection: 'row',
        backgroundColor: '#4B4B4B',
        borderRadius: 4,
        marginBottom: 13,
        width: '100%'
      },
      iconStyle: {
        padding: 15,
      },
      inputStyle: {
        color: '#6F6F6F',
        padding: 15
      },
    });

    const { iconStyle, wrapper, inputStyle, keyboardType } = styles;

    return (
      <View style={wrapper}>
        {icon && <Icon style={iconStyle} name={icon} size={20} color="#6F6F6F" />}
        <TextInput
          keyboardType={keyboardType || 'default'}
          inlineImageLeft='cog'
          placeholderTextColor="#6F6F6F"
          style={inputStyle}
          placeholder={placeholder}
          onChangeText={this.handleInputChange}
        />
      </View>
    );
  }
}
