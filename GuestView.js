import styles            from './styles.js'
import SearchButton      from './SearchButton'
import ajax              from './ajaxAdapter.js'
import React, { Component } from 'react';
import {Container, Content, Card, CardItem, Button, Icon, AsyncStorage} from 'native-base';
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


var GuestView =React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data
    }
  },
  _renderList: function(){
    let list
    if (this.state.search){
      list=this.state.data
    } else{
      list=this.props.data
    }
    return(
      <View>

          {list.map((felony, id)=>{
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
      <View style={{marginTop: 25, flex: 1}}>
      <MapView
        style={{height: 200, flex:1}}
        showsUserLocation={true}
        followUserLocation= {true}    />

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

export default GuestView
