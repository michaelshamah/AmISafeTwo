import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TabBarIOS, MapView, TextInput,ScrollView, TouchableOpacity, Image, ListView } from 'react-native';
import {Card, CardItem, InputGroup, Input, Icon, Button} from 'native-base';
import styles            from './styles.js'
import ajax              from './ajaxAdapter.js'
class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state= {
      locations:[]
    };
  }
  componentDidMount(){
    let here=this
    ajax.getLocations(this.props.user_id).then(data=>{
      console.log(data)
      here.setState({locations: data})
    })
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
              </CardItem>
            </Card>
          )
        })}
      </View>
    )
  }
  render(){
    return(
    <View style= {styles.container}>
    <Button primary block onPress={this.props.loggedOut}> Log Out </Button>
    <Text> WELCOME {this.props.user}</Text>
    <Text> Your Locations </Text>
    <ScrollView
      ref={(scrollView) => { _scrollView = scrollView; }}
      automaticallyAdjustContentInsets={false}
      scrollEventThrottle={200}
      style={styles.scrollView}>
      {this._renderList()}
    </ScrollView>
    </View>
    )
  }
}

export default UserPage
