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
import Styles from './ButtonStyle'


class Button extends Component{
    constructor(){
        super();
        this.state = {
            //ButtonText : this.props.buttonLabel,
            
        }
    }


onPressButton(){
    //alert("test")
      this.props.myFunc()
}
    render(){
        return(
            

                <TouchableOpacity
                onPress={this.onPressButton.bind(this)}
                style={Styles.button}
                >
                <Text style={{
                            fontSize : 16,
                            fontWeight : 'bold',
                            color : 'red'
                }}>{this.state.ButtonText}</Text>
                </TouchableOpacity>

            
        );
    }

}

export default Button