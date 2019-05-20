
import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar  } from 'react-native';

import Timer from './src/components/Timer'

export default class App extends Component {
  constructor(props) {
    super(props);
}
  state = {
    color: '#E98C8C',
  }

  handleColorChange = (newColor) => {
    console.log('handle Color change chamado')
    this.setState({
      color: newColor
    })
    return newColor;
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.color }]}>
      < StatusBar translucent backgroundColor={this.state.color} />
        <Timer parentColor={this.handleColorChange}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 40,
  }
});
