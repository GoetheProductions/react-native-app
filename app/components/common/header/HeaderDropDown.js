import React, { Component } from 'react';
import { View, StyleSheet, Text, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  wrapper: {
    width: '50%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 33,
    right: 5,
    padding: 20
  },
  text: {
    textAlign: 'center'
  }
});

export default class HeaderDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <View style={styles.wrapper}>
        <ListView
          dataSource={ds.cloneWithRows(['row 1', 'row 2'])}
          renderRow={(rowData) => <Text style={styles.text}>{rowData}</Text>}
        />
      </View>
    );
  }
}
