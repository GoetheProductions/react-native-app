import React, { Component } from 'react';

import { View, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../actions/users';
import Header from '../../components/header';
import { usersSelector, isFetchingUsersSelector } from '../../selectors';
import Button from '../../components/button';
import { bgImage } from '../../../constants';


const mapStateToProps = state => {
  return {
    users: usersSelector(state),
    isFetchingUsers: isFetchingUsersSelector(state),
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchUsers }, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  render() {
    const isCustomer = true;
    const styles = StyleSheet.create({
      wrapper: {
        backgroundColor: isCustomer ? '#3D3D3D' : '#EDEDED',
        display: 'flex',
        width: '100%',
        height: '100%'
      }
    });
    const { wrapper } = styles;

    return (
      <View style={wrapper}>
        <StatusBar barStyle="light-content" />
        <Header text="STAM INFORMATION" source={bgImage} />
        <View>
          <Button text="GEM ÆNDRINGER" />
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
