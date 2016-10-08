import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  MapView
  
} from 'react-native';
const window = Dimensions.get('window');

import StatusBar from '../Components/StatusBar'

class Deductable extends Component {

render(){

    return(



        <MapView
        style={{height: 600, margin: 40,width : 400}}
        showsUserLocation={true}
        />


    );
}

}

export default Deductable