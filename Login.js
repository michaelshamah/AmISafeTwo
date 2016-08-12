import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TabBarIOS, MapView, TextInput,ScrollView, TouchableOpacity, Image, ListView } from 'react-native';
import UserPage          from './UserPage.js'
import Search            from './Search.js'
import styles            from './styles.js'
import ajax              from './ajaxAdapter.js'
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
      <View>
        <Text style= {styles.welcome}>
        hello
        </Text>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }

            }
          }
          onLogoutFinished={() => alert("User logged out")} />
      </View>
    );
  }
});

export default Login
