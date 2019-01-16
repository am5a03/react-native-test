import React, {Component} from 'react';
import { Animated, Text, View } from 'react-native';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        top: new Animated.Value(30)
    }
  }

  componentDidMount() {
    console.log(this.state);
    Animated.timing(                  
        this.state.top,
        {
          toValue: 0, 
          duration: 500,
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