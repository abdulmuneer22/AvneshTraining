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
var windowSize=Dimensions.get('window');

import StatusBar from '../Components/StatusBar'
import Button from '../Components/Button'

import { NativeModules } from 'react-native';


class MyCard extends Component {

    constructor(){
        super();
        this.state={
            mobileNumber : '+910000000000',
            msg : ''
        }
    }


sendMessage(){

NativeModules.SmsModule.send(
this.state.mobileNumber,
"hello",
() => this.setState({ msg: 'Message was sent!'}),
(err) => this.setState({ msg: 'Could not send message'})
)


//alert("test")

}


render(){

    return(
        <View>

        <StatusBar leftIcon='chevron-left' title="My Card" StatusBarColor="#00BCD4" navigator={this.props.navigator}/>

        <View style={{
            alignItems : 'center',
            justifyContent :'center',

        }}>
        <Text style = {{fontSize : 30}}>
        Send Message
        </Text>

        <View style={{flexDirection : 'row',padding : 20}}>
        <Text style={{
            alignItems : 'center',
        alignSelf : 'center',
        flex : 1,
        
        color : 'black',
        justifyContent : 'center',
        
        }}>Mobile Number</Text>
        <TextInput
        
        style={{
        alignItems : 'center',
        flex :2,
        alignSelf : 'center',
        height : 40,
        color : 'black'
        }}
        placeholder="Password"
        onChangeText = {(text) => {
        this.setState({mobileNumber:text})
        }}
        value={this.state.mobileNumber}
        />
        </View>


        <TouchableOpacity
                
                style={{
                flexDirection : 'column',
                alignItems : 'center',
                backgroundColor : 'blue',
                height : 45,
                borderColor : 'white',
                borderWidth : 6,
                borderRadius : 0.5,
                justifyContent : 'center',
                marginBottom :10,
                marginTop : 10,
                flex : 1,
                marginRight : 5
                }}

                onPress={
                    this.sendMessage.bind(this)

                }
                >
                <Text style={{
                fontSize : 16,
                padding : 20,
                color : 'white'
                }}>Send Message</Text>
                </TouchableOpacity>

                <Text>{this.state.msg}</Text>


        </View>
        </View>

    );
}

}

export default MyCard