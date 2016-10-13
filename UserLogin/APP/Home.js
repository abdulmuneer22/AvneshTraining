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

import Drawer from 'react-native-drawer'
// Imported DrawerContent from APP -> Conatins all slide menu options
import DrawerContent from './DrawerContent'







class Home extends Component {

constructor(){
    super();
    this.state = {
    drawerOpen: false,
    drawerDisabled: false,
    }
  }

  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

renderScene(route,navigator){

if(route.name == 'paynow'){
      return <PayNow  navigator={navigator} />
}

if(route.name == 'mainScreen'){
      return <Main  navigator={navigator} closeDrawer={this.closeDrawer} openDrawer={this.openDrawer} {...this.props}/>
}

if(route.name == 'forgotPassword'){
      return <ForgotPassword  navigator={navigator} />
}

if(route.name == 'register'){
      return <Register  navigator={navigator} />
}

if(route.name == 'welcomeScreen'){
      return <WelcomeScreen  navigator={navigator} closeDrawer={this.closeDrawer} openDrawer={this.openDrawer} {...this.props}/>
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
      <Drawer
      ref={(ref) => this._drawer = ref}
      type="static"
      styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
      onOpen={() => {
      console.log('onopen')
      this.setState({drawerOpen: true})
      }}

      onClose={() => {
      console.log('onclose')
      this.setState({drawerOpen: false})
      }}

      open={this.state.drawerOpen}
      tweenDuration={100}
      panThreshold={0.08}
      disabled={this.state.drawerDisabled}

      content={<DrawerContent closeDrawer={this.closeDrawer}/>}
      openDrawerOffset={0.2}
      panCloseMask={0.2}
      tweenHandler={(ratio) => ({
        main: { opacity: Math.max(0.54, 1 - ratio) }
      })}
      >


            <Navigator
            initialRoute={{name: 'mainScreen'}}
            renderScene={this.renderScene.bind(this)}
            //configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight}}
            configureScene={this.configureScene.bind(this)}
            />

      </Drawer>


    )
}



}


export default Home
