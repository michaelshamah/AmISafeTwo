import styles            from './styles.js'
import ajax              from './ajaxAdapter.js'
import React, { Component } from 'react';
import {Container, Content, Card, CardItem} from 'native-base';
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
      text: '',
      search:false
    }
  },

  onSubmit: function(){
    console.log(this.state)
  },
  _renderList: function(){
    console.log('rendering')
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
      console.log(this.props)
      felonies= (
        this._renderList())
    } else{
      felonies= (<Text> NO DATA </Text>)
    }
    return (
      <View style={{marginTop: 25}}>
      <TextInput style={{margin: 10, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        blurOnSubmit={true}
        onBlur={this.onSubmit()}
      />
      <MapView
        style={{height: 200, flex:1}}
        showsUserLocation={true}
        followUserLocation={true}      />
        <TouchableOpacity
          style={styles.button}
          onPress={() => { _scrollView.scrollTo({y: 0}); }}>
          <Text>SAVE LOCATION</Text>
        </TouchableOpacity>
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
