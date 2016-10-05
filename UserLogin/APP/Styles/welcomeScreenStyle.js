
'use strict';

var React = require('react-native');

var { StyleSheet } = React;
var Dimensions=require('Dimensions');
var windowSize=Dimensions.get('window');

module.exports = StyleSheet.create({
  
  logoWrapper : {
    marginTop : 20,
    alignItems : 'center',
    flexDirection : 'row'
  },
  logoTextContainer : {
    alignItems : 'center',
    flex : 8,
    justifyContent : 'center'
  },
  logo : {
    fontSize : 40,
    color : '#2196F3'
  },
  helpBubble : {
      flex : 1,
      alignItems :'flex-end',
      paddingRight : 10,
      
  }



});
