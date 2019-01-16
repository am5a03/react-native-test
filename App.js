/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {fetchPosts, requestPosts} from './actions';
import Item from './Item';

type Props = {};
class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.props.load();
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: props.items
    })
    console.log("will receive");
  }

  _renderItem(item) {
    return (
      <Item
        title={item.item.title}
      />
    )
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.posts);
  return {
    items: state.posts.items,
    didRefresh: state.posts.didRefresh,
    isFetching: state.posts.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
