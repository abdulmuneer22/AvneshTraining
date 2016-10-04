import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
} from 'react-native';

const window = Dimensions.get('window');
const wrapperheight = window.height -80
const bottomheight = window.height - wrapperheight


const Styles = StyleSheet.create({
  container : {
    backgroundColor : '#f4f5f7',
    height : wrapperheight

  },

  button : {
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
  }


  
})


module.export = Styles
