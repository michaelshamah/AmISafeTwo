import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TabBarIOS, MapView, TextInput,ScrollView, TouchableOpacity, Image, ListView, AsyncStorage, AlertIOS } from 'react-native';
import UserPage          from './UserPage.js'
import Search            from './Search.js'
import styles            from './styles.js'
import ajax              from './ajaxAdapter.js'
import {Container, Content, List, ListItem, InputGroup, Input, Icon, Button} from 'native-base';
var STORAGE_KEY = 'id_token';
var Login = React.createClass({

  getInitialState: function() {
    return {
      email: undefined,
      name: undefined,
      password: undefined
    }
  },

  componentDidMount: function() {
    console.log('hello')
  },

  _onPress() {
    console.log(this.state)
    ajax.addNewUser(this.state.email, this.state.name, this.state.password).then(data=>{
      console.log(data)
    })
  },

  _onPressTwo() {
    ajax.loginUser(this.state.email, this.state.password).then(data=>{
      this.props.loggedIn(data)
    })
  },
  _OnPressGuest() {
    this.props.loggedIn('guest')
  },

  render: function() {
    return (
      <View style= {{flex: 1, margin: 20}}>
        <List>
          <ListItem>
            <InputGroup>
                <Input  inlineLabel label="EMAIL" placeholder="example@example.com" onChangeText={(text) => this.setState({email: text})} />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input  inlineLabel label="PASSWORD" secureTextEntry={true} onChangeText={(text) => this.setState({password: text})}/>
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup >
              <Input inlineLabel label="NAME" placeholder="Jonny Appleseed"
              onChangeText={(text) => this.setState({name: text})}/>
            </InputGroup>
          </ListItem>
        </List>
        <Button info block onPress={this._onPress}> Sign Up
        </Button>
        <List style={{marginTop: 30}}>
          <ListItem>
            <InputGroup>
                <Input  inlineLabel label="EMAIL" placeholder="example@example.com" onChangeText={(text) => this.setState({email: text})}/>
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input  inlineLabel label="PASSWORD" secureTextEntry={true}  onChangeText={(text) => this.setState({password: text})}/>
            </InputGroup>
          </ListItem>
        </List>
        <Button warning block onPress={this._onPressTwo}> Login
        </Button>
        <Text> OR </Text>
        <Button primary block onPress={this._OnPressGuest}> Sign in as Guest
        </Button>
      </View>
    );
  }
});

export default Login
