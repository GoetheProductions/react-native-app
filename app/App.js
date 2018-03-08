import React, { Component } from 'react';

import { Text, View } from 'react-native';
import Header from './components/header';
import { bgImage } from './components/header/constants';
import styles from './App.style';

export default class App extends Component {
  render() {
    const { wrapper } = styles;

    return (
      <View style={wrapper}>
        <Header text="STAM INFORMATION" source={bgImage} />
        <Text>Content</Text>
        <Text>Menu</Text>
      </View>
    );
  }
}
