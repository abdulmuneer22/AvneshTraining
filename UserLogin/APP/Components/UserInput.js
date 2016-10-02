import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  
} from 'react-native';
const window = Dimensions.get('window');

class UserInput extends Component{

    constructor(props){
        super(props);
        this.state={
            inputtext : this.props.displayText,
            secureText : this.props.secureText,
            textValue : ''

        }
    }

   
    
    render(){

        
        return(

        <View style={{
        marginTop : 20,backgroundColor : 'white',padding : 5
        }}>

        <TextInput
        secureTextEntry={this.props.secureText}
        style={{
        alignItems : 'center',
        alignSelf : 'center',
        width : window.width*0.7,
        height : 40,
        color : 'black'

        }}
        placeholder={this.state.inputtext}
        
        value={this.state.textValue}

        />
        
        </View>
        );

    }

}

export default UserInput