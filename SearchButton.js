import ajax              from './ajaxAdapter.js'
import React, { Component } from 'react';
import {Container, Content, Card, CardItem, Button, Icon} from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  MapView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ListView
} from 'react-native'
var SearchButton =React.createClass({
  getInitialState: function() {
    return {
      address: '',
      search: false
    }
  },
  render: function(){
    return(
      <Button block success
        onPress={this.p}>
        Search
      </Button>
    )
  }
})

export default SearchButton
