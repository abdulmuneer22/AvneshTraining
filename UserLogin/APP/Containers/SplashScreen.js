import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';


class SplashScreen extends Component{

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigator.push({name:'mainScreen'})
        },3000)
    }

    render(){
        return(
            <View style ={{
                flex : 1 ,
                backgroundColor : 'green',
                alignItems :'center',
                justifyContent : 'center'
            }}>
            <Text>Some Logo</Text>
            </View>

        );
    }


}

export default SplashScreen