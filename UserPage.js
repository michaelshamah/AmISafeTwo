import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TabBarIOS, MapView, TextInput,ScrollView, TouchableOpacity, Image, ListView } from 'react-native';
import {Container, Content, InputGroup, Input, Icon} from 'native-base';
import Login from './Login.js'
class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state= {
    };
  }

  render(){
    return(
    <View>
      <Login />

    </View>
    )
  }
}

export default UserPage
