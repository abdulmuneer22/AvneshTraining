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
import UserInput from '../Components/UserInput'
import Button from '../Components/Button'
import StatusBar from '../Components/StatusBar'


class ForgotPasword extends Component{
    render(){
        return(
        <View style={{
            backgroundColor : '#0184ba',
            flex : 1,
            alignItems : 'center',
            //justifyContent : 'center'
            flexDirection : 'column'


        }}>

        <StatusBar leftIcon='chevron-left' title="Forgot Pasword" StatusBarColor="#00BCD4" navigator={this.props.navigator}/>

        
       


        <View style={{justifyContent : 'center',marginTop : 50}}>

        <UserInput displayText="Enter Your Registered Email" check = ""{...this.props}/>
        
        
        <View style={{flexDirection : 'row'}}>
        <Button buttonLabel = "Submit" navigator={this.props.navigator} />
        
        </View>
        

        

        </View>

        </View>
        
        
        
        );
    }

}

export default ForgotPasword