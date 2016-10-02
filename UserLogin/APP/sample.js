import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight
} from 'react-native';

import UserInput from './Components/UserInput'
import Button from './Components/Button'

const window = Dimensions.get('window');
class Sample extends Component {

handleInput(){
alert()
}


    render(){

    return(
        
        <View style={{
            backgroundColor : '#0184ba',
            flex : 1,
            alignItems : 'center',
            //justifyContent : 'center'
            flexDirection : 'column'


        }}>
        
        <View style={{marginTop : 150}}>
        <Text style={{
        fontSize : 40,
        color : 'white'
        }}>Florida Blue</Text>
        </View>


        <View>

        <UserInput displayText="UserName" check = ""{...this.props}/>
        <UserInput displayText="Password" secureText = {true} {...this.props}/>
        
        <View style={{flexDirection : 'row'}}>
        <Button buttonLabel = "Login" navigator={this.props.navigator}/>
        <Button buttonLabel = "Clear" />
        </View>
        

        <View style={{flexDirection : 'row'}}>
        <Text style={{
            color : 'white',
            alignSelf : 'flex-start',
            //marginLeft : 50,
            flex : 1,
            textAlign : 'left'
            }}>
            Register
    
        </Text>

        <Text style={{
            color : 'white',
            alignSelf : 'flex-end',
            //marginRight : 60,
            flex : 1,
            textAlign : 'right'
            }}>Forgot Password ?</Text>
        </View>

        </View>

        </View>



    );

    }

}


export default Sample