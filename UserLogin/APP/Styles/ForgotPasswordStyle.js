
'use strict';

var React = require('react-native');

var { StyleSheet } = React;
var Dimensions=require('Dimensions');
var windowSize=Dimensions.get('window');

module.exports = StyleSheet.create({
  container : {
            backgroundColor : '#0184ba',
            flex : 1,
            alignItems : 'center',
            //justifyContent : 'center'
            flexDirection : 'column'
    }




});
