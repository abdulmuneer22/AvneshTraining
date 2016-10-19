import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class ScreenOne extends Component {

    render(){
        return(<View style={{
            flex : 1,
            backgroundColor : 'red',
            alignItems : 'center',
            justifyContent : 'center'

        }}>
        <Text>ScreenOne</Text>

        <TouchableHighlight
        onPress = {()=>{
            this.props.navigator.push({name : 'screentwo'})
        }}
        >
        <Text>GO NEXT</Text>
        </TouchableHighlight>
        </View>)
    }

}







