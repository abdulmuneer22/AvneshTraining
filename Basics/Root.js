/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import ScreenOne from './Screens/screenone'
import ScreenTwo from './Screens/screenone2'
import ScreenThree from './Screens/screenone3'
import MapView from './Screens/mapView'



export default class Root extends Component {

renderScene(route,navigator){

    switch(route.name){

    case 'screenone':
    return <ScreenOne  navigator={navigator} />


    case 'screentwo':
    return <ScreenTwo  navigator={navigator} />

    case 'screenthree':
    return <ScreenThree  navigator={navigator} />

    case 'MapView':
    return <MapView  navigator={navigator} />






}

}


configureScene(route){
    switch(route.name){

    case 'screenone':
    return Navigator.SceneConfigs.FloatFromBottom

    case 'screentwo':
    return Navigator.SceneConfigs.FloatFromBottom

    case 'screenthree':
    return Navigator.SceneConfigs.FloatFromBottom

    default :
    return Navigator.SceneConfigs.FloatFromBottom

    }

}

  render() {
    return (
      <Navigator
      initialRoute={{name: 'MapView'}}
      renderScene={this.renderScene.bind(this)}
      configureScene={this.configureScene.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
