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


  
})


module.export = Styles
