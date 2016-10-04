import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
  
} from 'react-native';
const window = Dimensions.get('window');

import StatusBar from '../Components/StatusBar'

class MyCard extends Component {

render(){

    return(
        <View>

        <StatusBar leftIcon='chevron-left' title="My Card" StatusBarColor="#00BCD4" navigator={this.props.navigator}/>

        <View style={{
            alignItems : 'center',
            justifyContent :'center',

        }}>
        <Text style = {{fontSize : 30}}>
        MyCard Page
        </Text>
        </View>
        </View>

    );
}

}

export default MyCard