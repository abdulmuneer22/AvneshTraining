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
                style={{
                            flexDirection : 'column',
                            alignItems : 'center',
                            //width: (window.width * 0.70/2),
                            backgroundColor : 'white',
                            height : 45,
                            borderColor : 'white',
                            borderWidth : 6,
                            borderRadius : 0.5,
                            justifyContent : 'center',
                            marginBottom :10,
                            marginTop : 10,
                            flex : 1
                           
                }}
                
                >
                <Text style={{
                            fontSize : 16,
                            fontWeight : 'bold',
                            color : 'black'
                }}>{this.state.ButtonText}</Text>
                </TouchableOpacity>

            
        );
    }

}

export default Button