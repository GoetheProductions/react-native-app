import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Menu from '../header/Menu';

class CustomerDashboard extends Component {
  render() {
    const styles = StyleSheet.create({
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      },

      menu: {
        backgroundColor: 'green',
        width: '100%',
        height: 55
      },

      content: {
        backgroundColor: 'black',
        width: '100%',
        height: 530
      },

      header: {
        marginTop: getStatusBarHeight(),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: 131
      },

      headerImage: {
        position: 'absolute',
        top: 0,
        height: 131,
        width: '100%'
      },

      headerText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 28
      },
      subMenu: {
        position: 'absolute',
        top: 5,
        left: 5,
        color: 'white'
      }
    });

    const { source, headerHeadline } = this.props;
    const { headerText, headerImage, wrapper, header, content, menu, subMenu } = styles;

    return (
      <View style={wrapper}>
        <View style={header}>
          <Image style={headerImage} source={source} />
          <Menu back subMenu />
          <Text style={headerText}>{headerHeadline}</Text>
        </View>

        <View style={content}>
          <Text>CONTENT</Text>
        </View>

        <View style={menu}>
          <Text>Menu</Text>
        </View>
      </View>
    );
  }
}

export default CustomerDashboard;
