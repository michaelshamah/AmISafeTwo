/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TabBarIOS, MapView, TextInput,ScrollView, TouchableOpacity, Image, ListView, AsyncStorage } from 'react-native';
import UserPage          from './UserPage.js'
import Search            from './Search.js'
import GuestView         from './GuestView.js'
import Login             from './Login.js';
import styles            from './styles.js'
import ajax              from './ajaxAdapter.js'

class AmISafeTwo extends Component {
  constructor(props) {
    super(props)
    this.state= {
      selected: true,
      selectedTab: 'tab1',
      longitude: 'unknown',
      latitude: 'unknown',
      data: ['noting found'],
      text: '',
      user: undefined,
      user_id: undefined,
      locations:[]
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
          let lastfive=[]
          let i= data.length-1
          while (i >= 0){
            lastfive.push(data[i])
            i--
            if (i<= data.length-6){
              break
            }
          }
          here.setState({data: lastfive})
        })
      }
    )
  }

   loggedIn(user) {
    console.log(user)
    this.setState({user: user.name,
      user_id: user.user})
    console.log('logginin', this.state.user)
  }
  loggedInGuest(user) {
    console.log(user)
    this.setState({user: user})
  }
  loggedOut() {
    this.setState({user: undefined,
      user_id: undefined})
  }
  getLocations(){
    let here=this
    ajax.getLocations(this.props.user_id).then(data=>{
      console.log(data)
      here.setState({locations: data})
    })
  }
  render() {
    if(this.state.user === 'guest'){
      return(
        <TabBarIOS
          unselectedTintColor="black"
          tintColor="white"
          barTintColor="#BBDEFB">
          <TabBarIOS.Item
            systemIcon="search"
            selected={this.state.selectedTab === 'tab1'}
            onPress={() => {
              this.setState({
                selectedTab: 'tab1',
              });
            }}>
            <GuestView data={this.state.data}  />
          </TabBarIOS.Item>
        </TabBarIOS>
      )
    } else if (this.state.user){
      return (
        <TabBarIOS
          unselectedTintColor="black"
          tintColor="white"
          barTintColor="#BBDEFB">
          <TabBarIOS.Item
            systemIcon="search"
            selected={this.state.selectedTab === 'tab1'}
            onPress={() => {
              this.setState({
                selectedTab: 'tab1',
              });
            }}>
            <Search data={this.state.data} long={this.state.longitude}
            lat={this.state.latitude} user={this.state.user_id} />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="contacts"
            selected={this.state.selectedTab === 'tab2'}
            onPress={() => {
              this.setState({
                selectedTab: 'tab2',
              });
            }}>
            <UserPage user={this.state.user} user_id={this.state.user_id} loggedOut= {this.loggedOut.bind(this)} />
          </TabBarIOS.Item>
          </TabBarIOS>

       );
    } else {
      return(
        <View>
          <Login loggedIn= {this.loggedIn.bind(this)} loggedInGuest= {this.loggedInGuest.bind(this)} />
        </View>
      )
    }
  }
}


AppRegistry.registerComponent('AmISafeTwo', () => AmISafeTwo);
