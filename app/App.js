import React, { Component } from 'react';

import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from './actions/users';
import Header from './components/header';
import ActionButton from './components/action_button';
import { bgImage } from './components/header/constants';


const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = dispatch => bindActionCreators({ fetchUsers }, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();

    console.log('this.props ', this.props);
  }

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
          <ActionButton isDangerZone={false} text="GEM ÆNDRINGER" />
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
