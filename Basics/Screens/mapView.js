import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class MapView extends Component {

    render(){
        return(
        <View style={{
            flex : 1,
            backgroundColor : 'red',
            alignItems : 'center',
            justifyContent : 'center'

        }}>

        <Text>MAP View</Text>

        <TouchableHighlight
        onPress = {()=>{
            this.props.navigator.pop()
        }}
        >
        <Text>GO BACK</Text>
        </TouchableHighlight>
        </View>)
    }

}

export default MapView
