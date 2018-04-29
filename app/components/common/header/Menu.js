import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import HeaderDropDown from './HeaderDropDown';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    padding: 7
  },
  placeholderStyles: { height: 1, width: 1 }
});

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleToggleDropDown = () => this.setState({ open: !this.state.open });

  render() {
    const { wrapper, placeholderStyles } = styles;
    const { back, subMenu } = this.props;
    const { open } = this.state;
    const placeholder = (<View style={placeholderStyles} />);

    return (
      <View style={wrapper}>
        {back ? <Icon name="angle-left" size={31} color="white" onPress={() => Actions.pop()} style={subMenu} /> : placeholder}
        {subMenu && <Icon name="ellipsis-h" size={31} color="white" onPress={this.handleToggleDropDown} />}

        {open && <HeaderDropDown />}

      </View>
    );
  }
}
