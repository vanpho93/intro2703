import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import Box from './Box';

function a() {
  return () => console.log('123');
}

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  a(num) {
    console.log(num);
  } 

  render() {
    return (
      <View>
        <Text style={{ color: this.props.mau }}>Hello {this.props.name}</Text>
        <Text>{this.state.value}</Text>
        <Button title="Add" onPress={a()} />
      </View>
    );
  }
}

const Hi = (props) => (
  <View>
    <Text>Hi Component {props.name}</Text>
  </View>
);

class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Box />
        <Box />
        <Box />
      </View>
    );
  }
}

AppRegistry.registerComponent('Demo', () => HelloWorldApp);
