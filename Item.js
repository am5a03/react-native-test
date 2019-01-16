import React, {Component} from 'react';
import { Animated, Text, View } from 'react-native';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        top: new Animated.Value(1000)
    }
  }

  componentDidMount() {
    console.log(this.state);
    Animated.spring(                  
        this.state.top,
        {
          toValue: 0
        }
      ).start();
  }

  componentWillReceiveProps(props) {

  }

  render() {
      return (
        <Animated.View style={{ flex: 1, margin: 8, top: this.state.top }}>
            <Text style={{ fontSize: 24 }}>
                {this.props.title}
            </Text>
        </Animated.View>
      )
  }
}