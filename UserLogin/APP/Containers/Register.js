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

import UserInput from '../Components/UserInput'
import Button from '../Components/Button'
import StatusBar from '../Components/StatusBar'

const window = Dimensions.get('window');
class Register extends Component {




    render(){
    

    /* {...this.props is used to wrap all the props 
        available in the Component into one 
        props

        so which is available on child Component as {this.props.somevalue}

        
        
    }

    */
    return(
        <View style={{
            backgroundColor : '#0184ba',
            flex : 1,
           
        }}>

        <StatusBar 
        leftIcon='chevron-left' 
        title="Register" 
        StatusBarColor="#00BCD4" {...this.props}/>
        
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

        <UserInput displayText="First Name" check = ""{...this.props}/>
        <UserInput displayText="Last Name"  {...this.props}/>
        <UserInput displayText="Date Of Birth eg MM/DD/YYYY" secureText = {true} {...this.props}/>
        

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
        <TouchableOpacity
        onPress={()=>{this.props.navigator.push({name:'welcomeScreen'})}}
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
                }}>Register</Text>
                </TouchableOpacity>
        </View>

        
        
        
        </View>
        

        

        </View>

        </View>



    </View>);

    }

}


export default Register