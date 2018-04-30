import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Menu from '../header/Menu';

class CustomerDashboard extends Component {
  render() {
    const styles = StyleSheet.create({
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#3D3D3D'
      },

      menu: {
        width: '100%',
        height: 55,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
      },

      content: {
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
      },
      iconBars: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'white',
        padding: 7
      }
    });

    const { source, headerHeadline } = this.props;
    const { headerText, headerImage, wrapper, header, content, menu, iconBars } = styles;

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
          <Icon
            name="bars"
            size={18}
            color="white"
            onPress={() => console.log('OVERVIEW')}
            style={iconBars}
          />

          <Icon
            name="plus-circle"
            size={46}
            color="white"
            onPress={() => console.log('ADD')}
          />

          <Icon
            name="cog"
            size={36}
            color="white"
            onPress={() => console.log('SETTINGS')}
          />
        </View>
      </View>
    );
  }
}

export default CustomerDashboard;
