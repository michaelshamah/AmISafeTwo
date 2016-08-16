import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TabBarIOS, MapView, TextInput,ScrollView, TouchableOpacity, Image, ListView } from 'react-native';
import {Card, CardItem, InputGroup, Input, Icon, Button} from 'native-base';
import styles            from './styles.js'
import ajax              from './ajaxAdapter.js'
class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state= {
      locations:[],
    };
  }
  componentDidMount(){
    let here=this
    ajax.getLocations(this.props.user_id).then(data=>{
      console.log(data)
      here.setState({locations: data})
    })
  }
  _onPress(event){
    console.log(event.target)
  }
  _renderList() {
    return(
      <View>
        {this.state.locations.map((address, id)=>{
          return (
            <Card key={id} style={{margin: 5}}>
              <CardItem header>
                <Text>
                  {address.address}
                </Text>
                <Button warning rounded >
                  Delete location
                </Button>
              </CardItem>
            </Card>
          )
        })}
      </View>
    )
  }
  render(){
    return(
    <View style={{backgroundColor: '#1976D2', flex: 1}}>
    <Text style={{marginTop: 40, textAlign: 'center', margin: 10, fontSize: 25}}> WELCOME {this.props.user}</Text>
    <Button style={{backgroundColor: '#9E9E9E'}} block onPress={this.props.loggedOut}> Log Out </Button>
    <ScrollView
      ref={(scrollView) => { _scrollView = scrollView; }}
      automaticallyAdjustContentInsets={false}
      scrollEventThrottle={200}
      style={styles.scrollView}>
    <Text style={{textAlign: 'center', margin: 10, fontSize: 15, color: '#212121'}}> Your Locations </Text>
      {this._renderList()}
    </ScrollView>
    </View>
    )
  }
}

export default UserPage
