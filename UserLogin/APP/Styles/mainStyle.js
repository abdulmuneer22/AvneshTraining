
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
    },
    logo : {
      fontSize : 40,
      color : 'white',
      fontStyle : 'italic'
    },
    userInputWrapper : {
      marginTop : 20,
      backgroundColor : 'white',
      padding : 5
    },
    userInput : {
    alignItems : 'center',
    alignSelf : 'center',
    width : windowSize.width*0.7,
    height : 40,
    color : 'black'
    },
    errorMessage : {
    marginTop : 10,
    color : 'orange',
    fontSize : 16
    },

    leftbutton : {
    flexDirection : 'column',
    alignItems : 'center',
    backgroundColor : 'white',
    height : 45,
    borderColor : 'white',
    borderWidth : 6,
    borderRadius : 0.5,
    justifyContent : 'center',
    marginBottom :10,
    marginTop : 10,
    flex : 1,
    marginRight : 5
    },
    rightbutton : {
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
    },

    buttonText : {
    fontSize : 16,
    fontWeight : 'bold',
    color : 'black'
    },

    forgotPassword : {
    color : 'white',
    alignSelf : 'flex-start',
    //marginLeft : 50,
    flex : 1,
    textAlign : 'left'
    },

    register:{
    color : 'white',
    alignSelf : 'flex-start',
    //marginRight : 60,
    flex : 1,
    textAlign : 'left'
    }
      
    





});
