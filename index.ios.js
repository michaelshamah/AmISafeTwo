/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TabBarIOS, MapView, TextInput,ScrollView, TouchableOpacity, Image, ListView } from 'react-native';
import UserPage          from './UserPage.js'
import Search            from './Search.js'
import styles            from './styles.js'
import ajax              from './ajaxAdapter.js'
import Login from './Login.js'

class AmISafeTwo extends Component {
  constructor(props) {
    super(props)
    this.state= {
      selectedTab: 'tab1',
      longitude: 'unknown',
      latitude: 'unknown',
      data: ['noting found'],
      text: '',
    };
  }
  componentDidMount() {
    let here=this
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = position.coords.longitude;
        var latitudePostiton = position.coords.latitude;

        this.setState({longitude: initialPosition, latitude: latitudePostiton});

        ajax.getFelonies(initialPosition, latitudePostiton).then(data=>{
          lastfive=[]
          for (var i= data.length-1; (i> data.length-6 || i< 0); i--){
            lastfive.push(data[i])
          }
          here.setState({data: lastfive})
       })
      }
    )
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="blue"
        tintColor="white"
        barTintColor="red">
        <TabBarIOS.Item
          systemIcon="search"
          selected={this.state.selectedTab === 'tab1'}
          onPress={() => {
            this.setState({
              selectedTab: 'tab1',
            });
            console.log(this.state)
          }}>
          <Search data={this.state.data}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="contacts"
          selected={this.state.selectedTab === 'tab2'}
          onPress={() => {
            this.setState({
              selectedTab: 'tab2',
            });
            console.log(this.state)
          }}>
          <Login />
        </TabBarIOS.Item>
        </TabBarIOS>

    );
  }
}


AppRegistry.registerComponent('AmISafeTwo', () => AmISafeTwo);
