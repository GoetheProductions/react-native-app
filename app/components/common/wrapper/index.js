import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Menu from '../header/Menu';
import SlideMenu from '../header/SlideMenu';

class CustomerDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleToggleDropDown = () => this.setState({ open: !this.state.open });

  render() {
    const styles = StyleSheet.create({
      wrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#3D3D3D',
        flex: 10
      },

      menu: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
      },

      content: {
        width: '100%',
        flex: this.props.hideMenu ? 8 : 7,
        flexDirection: 'column',
        padding: 13
      },

      header: {
        marginTop: getStatusBarHeight(),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flex: 2
      },

      headerImage: {
        position: 'absolute',
        top: 0,
        height: '100%',
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

    const {
      source,
      title,
      navigation: {
        state: { routeName }
      }
    } = this.props;
    const { headerText, headerImage, wrapper, header, content, menu, iconBars } = styles;

    return (
      <View style={wrapper}>
        <View style={header}>
          <Image style={headerImage} source={source} />
          <Menu back subMenu onPress={this.handleToggleDropDown} />
          <Text style={headerText}>{title}</Text>
        </View>

        <View style={content}>
          {this.props.children}
        </View>

        {!this.props.hideMenu && (
          <View style={menu}>
            <Icon
              name="bars"
              size={18}
              color="white"
              onPress={() => routeName !== 'customerDashboard' && Actions.customerDashboard()}
              style={iconBars}
            />

            <Icon
              name="plus-circle"
              size={46}
              color="white"
              onPress={() => routeName !== 'newOrder' && Actions.newOrder()}
            />

            <Icon
              name="cog"
              size={36}
              color="white"
              onPress={() => routeName !== 'settings' && Actions.settings()}
            />
          </View>
        )}
        {this.state.open && (
          <SlideMenu handleCloseMenu={this.handleToggleDropDown} />
        )}
      </View>
    );
  }
}

export default CustomerDashboard;
