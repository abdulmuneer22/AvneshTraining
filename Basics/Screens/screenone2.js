import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class ScreenTwo extends Component {

    render(){
        return(<View style={{
            flex : 1,
            backgroundColor : 'red',
            alignItems : 'center',
            justifyContent : 'center'

        }}>
        <Text>ScreenTwo</Text>

        <TouchableHighlight
        onPress = {()=>{
            this.props.navigator.push({name : 'screenthree'})
        }}
        >
        <Text>GO NEXT</Text>
        </TouchableHighlight>
        </View>)
    }

}







