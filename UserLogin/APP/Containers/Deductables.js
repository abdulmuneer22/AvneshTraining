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

class Deductable extends Component {

render(){

    return(
        <View>

        <StatusBar leftIcon='chevron-left' title="Deductables" StatusBarColor="#00BCD4" navigator={this.props.navigator}/>

        <View style={{
            alignItems : 'center',
            justifyContent :'center',

        }}>
        <Text style = {{fontSize : 30}}>
        Deductables
        </Text>
        </View>
        </View>

    );
}

}

export default Deductable