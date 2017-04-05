import React from 'react';
import { Button } from 'react-native';

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  add(num) {
    this.setState({ value: this.state.value + num });
  }
  render() {
    return <Button title={this.state.value + ''} onPress={() => this.add(5)}/>
  }
}