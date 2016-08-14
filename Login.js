import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TabBarIOS, MapView, TextInput,ScrollView, TouchableOpacity, Image, ListView } from 'react-native';
import UserPage          from './UserPage.js'
import Search            from './Search.js'
import styles            from './styles.js'
import ajax              from './ajaxAdapter.js'
import {Container, Content, List, ListItem, InputGroup, Input, Icon, Button} from 'native-base';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

var Login = React.createClass({
  componentDidMount: function() {
    console.log('hello')
  },
  render: function() {
    return (
      <View style= {{flex: 1, margin: 20}}>
        <List>
          <ListItem>
            <InputGroup>
                <Input  inlineLabel label="EMAIL" placeholder="example@example.com" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input  inlineLabel label="PASSWORD" secureTextEntry={true}/>
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup >
              <Input inlineLabel label="NAME" placeholder="Jonny Appleseed"/>
            </InputGroup>
          </ListItem>
        </List>
        <Button info block> Sign Up
        </Button>
        <List style={{marginTop: 30}}>
          <ListItem>
            <InputGroup>
                <Input  inlineLabel label="EMAIL" placeholder="example@example.com" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input  inlineLabel label="PASSWORD" secureTextEntry={true} placeholder="here" on/>
            </InputGroup>
          </ListItem>
        </List>
        <Button warning block> Login
        </Button>
      </View>
    );
  }
});

export default Login
