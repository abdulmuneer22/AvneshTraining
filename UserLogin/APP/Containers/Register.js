import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight
} from 'react-native';

import UserInput from '../Components/UserInput'
import Button from '../Components/Button'
import StatusBar from '../Components/StatusBar'

const window = Dimensions.get('window');
class Register extends Component {




    render(){

    return(
        <View style={{
            backgroundColor : '#0184ba',
            flex : 1,
           
        }}>

        <StatusBar leftIcon='chevron-left' title="Register" StatusBarColor="#00BCD4" {...this.props}/>
        
        <View style={{
            alignItems : 'center',
            marginTop : 0
           
        }}>

        

        
        <View style={{marginTop : 20,marginBottom : 40}}>
        <Text style={{
        fontSize : 40,
        color : 'white'
        }}>Florida Blue</Text>
        </View>


        <View>

        <UserInput displayText="User Name" check = ""{...this.props}/>
        <UserInput displayText="Password" secureText = {true} {...this.props}/>
        <UserInput displayText="Password" secureText = {true} {...this.props}/>
        

        <View
        style ={{
            marginTop : 30,
            //borderColor : 'black',
            //borderWidth : 1,
            flexDirection : 'row'
            
        }}
        
        >
        <View style={{
            flex : 1,
            marginRight : 5
        }}>
        <Button buttonLabel="Register"/>
        </View>

        <View style={{
            flex : 1
        }}>
        <Button buttonLabel = "Clear"/>
        </View>
        
        
        </View>
        

        <View style={{flexDirection : 'row',marginTop :10}}>
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
            }}
            onPress={()=>{this.props.navigator.push({name : 'forgotPassword'})}}
            >Forgot Password ?</Text>
        </View>

        </View>

        </View>



    </View>);

    }

}


export default Register