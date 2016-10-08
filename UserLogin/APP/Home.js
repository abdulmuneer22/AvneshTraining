/*
Home.js is the main entry point of the application
Navigator Component is used to manage navigation between all the screens
initialRoute screen will decide first screen to show

renderScene(route,navigator) =>
decides which screen need to be rendered based on route.name value

if , route.name = somescreen => render (somescreen)

navigator Component is used to keep track of all the screen navigation
*/


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Main from './main'
import ForgotPassword from './Containers/ForgotPassword'
import Register from './Containers/Register'
import WelcomeScreen from './Containers/WelcomeScreen'
import Deductable from './Containers/Deductables'

import PayNow from './Containers/PayNow'
import MyCard from './Containers/MyCard'







class Home extends Component {

renderScene(route,navigator){

if(route.name == 'paynow'){
      return <PayNow  navigator={navigator} />
}

if(route.name == 'mainScreen'){
      return <Main  navigator={navigator} />
}

if(route.name == 'forgotPassword'){
      return <ForgotPassword  navigator={navigator} />
}

if(route.name == 'register'){
      return <Register  navigator={navigator} />
}

if(route.name == 'welcomeScreen'){
      return <WelcomeScreen  navigator={navigator} />
}
if(route.name == 'mycard'){
      return <MyCard  navigator={navigator} />
}

if(route.name == 'deductable'){
      return <Deductable  navigator={navigator} />
}


}


configureScene(route){
    switch(route.name){
    case 'mainScreen':
      return Navigator.SceneConfigs.FloatFromBottom
    case 'forgotPassword':
      return Navigator.SceneConfigs.FloatFromBottom
    case 'welcomeScreen':
      return Navigator.SceneConfigs.FloatFromBottom

    case 'paynow':
      return Navigator.SceneConfigs.FloatFromBottom

    case 'mycard':
      return Navigator.SceneConfigs.FloatFromBottom

    
    default : 
      return Navigator.SceneConfigs.FloatFromBottom
    
}
}


render(){
    return(
            
            <Navigator
            initialRoute={{name: 'mainScreen'}}
            renderScene={this.renderScene.bind(this)}
            //configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight}}
            configureScene={this.configureScene.bind(this)}
            />
            

    )
}



}


export default Home