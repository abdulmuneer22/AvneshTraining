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
            <StatusBar leftIcon='menu' title="Hi John !" StatusBarColor="#00BCD4" navigator={this.props.navigator}/>

            <Text>Welcome Screen</Text>
            </View>
            )
    }
}


export default WelcomeScreen