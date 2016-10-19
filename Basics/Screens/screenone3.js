import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class ScreenThree extends Component {

    render(){
        return(<View style={{
            flex : 1,
            backgroundColor : 'red',
            alignItems : 'center',
            justifyContent : 'center'

        }}>
        <Text>ScreenThree</Text>

        <TouchableHighlight
        onPress = {()=>{
            this.props.navigator.push({name : 'screenone'})
        }}
        >
        <Text>GO FIRST</Text>
        </TouchableHighlight>


        <TouchableHighlight
        onPress = {()=>{
            this.props.navigator.push({name : 'screentwo'})
        }}
        >
        <Text>GO BACK</Text>
        </TouchableHighlight>
        </View>)
    }

}







