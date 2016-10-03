import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  PixelRatio,
  TouchableOpacity
  
} from 'react-native';
const window = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';



class StatusBar extends Component{
    constructor(props){
        super(props);
        this.state={
            StatusBarColor : this.props.StatusBarColor
        }

    }


    HandleleftButton(){
        var routeName = this.props.title
        //alert(routeName)
        switch(routeName){
            case 'Forgot Pasword':
            this.props.navigator.pop()

            case 'Register':
            this.props.navigator.pop()

            case 'Pay Now':
            this.props.navigator.pop()
        
        default : 
            console.log('menu button')
        }
    }



    render(){
        
        return(
        <View style={{
          backgroundColor : this.state.StatusBarColor,

          height: PixelRatio.getPixelSizeForLayoutSize(20),
          flexDirection : 'row' 
         

        }}>

        <TouchableOpacity style={{
          flex : 1,
          flexDirection : 'column',
          justifyContent : 'center',
          padding : 15


        }}
        onPress={()=>{
           this.HandleleftButton()
        }}
        >
        <Icon name= {this.props.leftIcon} size={PixelRatio.getPixelSizeForLayoutSize(10)} color="white" />
        </TouchableOpacity>

        <View
        style={{
          flex : 8,
          justifyContent :'center',
          marginLeft : 30
      }}>
        <Text
        style={{
          fontSize : 18,
          color : '#ffffff',
          alignSelf : 'flex-start',
          fontWeight : 'bold',
          //fontStyle : 'italic'
          
        }}
        >{this.props.title}</Text>
        </View>


       

        
        </View>
            );
    }

}



export default StatusBar