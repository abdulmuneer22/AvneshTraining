import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import StatusBar from '../Components/StatusBar'
class WelcomeScreen extends Component{
    render(){
        return(
            <View>
            <Text>Florida Blue</Text>
            <Text>Welcom Back John!</Text>

            <Text>Welcome Screen</Text>
            </View>
            )
    }
}


export default WelcomeScreen