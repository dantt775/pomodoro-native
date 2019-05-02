
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './src/components/Timer'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
  },
  timer: {        
      fontSize: 40,
  }
});
