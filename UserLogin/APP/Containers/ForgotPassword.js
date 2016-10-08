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
import UserInput from '../Components/UserInput'
import Button from '../Components/Button'
import StatusBar from '../Components/StatusBar'

import styles from '../Styles/ForgotPasswordStyle';





class ForgotPasword extends Component{
    render(){
        return(
        <View style={styles.container}>

        <StatusBar leftIcon='chevron-left' title="Forgot Pasword" StatusBarColor="#00BCD4" navigator={this.props.navigator}/>

        
       


        <View style={{justifyContent : 'center',marginTop : 50}}>

        <UserInput displayText="Enter Your Registered Email" {...this.props}/>
        
        
        <View style={{flexDirection : 'row'}}>

        
        <TouchableOpacity
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
                }}>Submit</Text>
                </TouchableOpacity>
        
        </View>
        

        

        </View>

        </View>
        
        
        
        );
    }

}

export default ForgotPasword