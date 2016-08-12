import styles            from './styles.js'
import SearchButton      from './SearchButton'
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
} from 'react-native';


var Search =React.createClass({
  getInitialState: function() {
    return {
      address: '',
      search:false,
      searchLong: this.props.long,
      searchLat: this.props.lat,
      locate: true
    }
  },
  _onPress: function(){
    let here= this
    ajax.getAddress(this.state.address).then(data=>{
      console.log('this is the', data)
      this.setState({
        search: true,
        searchLong: data.lng,
        searchLat: data.lat,
        locate: false
      })
      console.log(state)
    })
  },


  _renderList: function(){
    return(
      <View>

          {this.props.data.map((felony, id)=>{
            return (
              <Card key={id} style={{margin: 5}}>
                <CardItem header>
                  <Text>
                    {felony.offense}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text>{felony.occurrence_month} {felony.occurrence_day}, {felony.occurrence_year}</Text>
                </CardItem>
              </Card>
            )
          })}

        </View>
          )
  },

  render: function(){
    let felonies;
    if(this.props.data !== undefined){
      felonies= (
        this._renderList())
    } else{
      felonies= (<Text> NO DATA </Text>)
    }
    return (
      <View style={{marginTop: 25}}>
      <TextInput style={{margin: 10, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({address: text})}
        value={this.state.address} />
      <Button block success
        onPress={this._onPress}>
        Search
      </Button>
      <MapView
        style={{height: 200, flex:1}}
        showsUserLocation={true}
        followUserLocation= {this.state.locate}
        region={{latitude: parseFloat(this.state.searchLat), longitude: parseFloat(this.state.searchLat)}}      />

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
})

export default Search
