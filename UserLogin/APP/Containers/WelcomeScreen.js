//Importing react native specic libraries

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

//Importing custom made Native Module ToastAndroid

import ToastAndroid from './Toast/maketoast';

// Importing ICON from react-native-vector-icons ;
// refer to package.json for complete list of dependacies

import Icon from 'react-native-vector-icons/MaterialIcons';
// Styles are seperated from APP Logic , Available on APP/Styles folder
import styles from '../Styles/welcomeScreenStyle'


import TabBarNavigator from '../Components/TabBarNavigator'

// Using Dimensions library from react native to messure window width and height
const window = Dimensions.get('window');



//const wrapperheight = window.height -80
//const bottomheight = window.height - wrapperheight
// Custom made StatusBar is used and imported from ../Components/StatusBar
import StatusBar from '../Components/StatusBar'


class WelcomeScreen extends Component{
    render(){
        //returning JSX Component to render on the Screen
        return(

           <View style={{flex :1}}>
            <StatusBar
            leftIcon='menu'
            title="Welcome Screen"
            StatusBarColor="#00BCD4"
            navigator={this.props.navigator}
            closeDrawer={this.props.closeDrawer}
            openDrawer={this.props.openDrawer}
            {...this.props}
            />


           <ScrollView>

           <View>



           </View>

           <View>

           <View style={styles.logoWrapper}>

                <View style={styles.logoTextContainer}>

                <Text style={styles.logo}>
                Welcome Page
                </Text>

                </View>


                <TouchableOpacity style={styles.helpBubble}
                onPress={()=>{
                    // On Press function inovked when pressed on "?"
                    alert("Please Contact Us On 18000-Customer-Care")}
                }>

                <Text style={{fontSize :40}}>?</Text>

                </TouchableOpacity>

            </View>

            <Text style={{fontSize : 20,textAlign : 'center', marginBottom : 10}}>Welcom Back John!</Text>
            <View style={{borderBottomColor : 'grey',borderBottomWidth : 1}}></View>

            <View>


                    <View>

                    <Text style={{
                        textAlign : 'center',


                        //backgroundColor : '#eff1f4',
                    //height : 20,
                    margin :10,
                    borderColor : '#eff1f4',
                    borderRadius : 2
                    }}>Your Current Balanc is 47474 on Dec 2016</Text>

                    <View style={{
                    backgroundColor : '#eff1f4',
                    height : 150,
                    margin :10,
                    borderColor : '#eff1f4',
                    borderRadius : 2,

                    flexDirection : 'row'

                    }}>


                    <View style={{
                    backgroundColor : '#eff1f4',
                    //height : 150,
                    //margin :10,
                    borderColor : '#eff1f4',
                    borderRadius : 2,
                    padding : 20,
                    flex : 1,
                    alignItems :'center'


                    }}>

                    <TouchableOpacity style={{
                        backgroundColor : 'green',
                        width : 70,
                        height : 70,
                        borderRadius : 70/2,
                        alignItems : 'center',
                        justifyContent : 'center',

                    }}
                    onPress={()=>{
                        // Navigated to paynow page on click
                        this.props.navigator.push({name : 'paynow'}
                        )
                    }}
                    >
                    <Icon name= 'attach-money' size={40} color="white"/>

                    </TouchableOpacity>
                    <Text>Pay Now</Text>

                    </View>

                    <View style={{
                    backgroundColor : '#eff1f4',
                    //height : 150,
                    //margin :10,
                    borderColor : '#eff1f4',
                    borderRadius : 2,
                    padding : 20,
                    flex : 1,
                    alignItems :'center'


                    }}>
                    <TouchableOpacity style={{
                        backgroundColor : 'purple',
                        width : 70,
                        height : 70,
                        borderRadius : 70/2,
                        alignItems : 'center',
                        justifyContent : 'center',
                        borderColor : 'purple'

                    }}
                    onPress={()=>{
                        // Navigated to paynow mycard on click
                        this.props.navigator.push({name : 'mycard'})
                    }}

                    >
                    <Icon name= 'credit-card' size={40} color="white" />
                    </TouchableOpacity>
                    <Text>My Card</Text>
                    </View>

                    <View style={{
                    backgroundColor : '#eff1f4',
                    //height : 150,
                    //margin :10,
                    borderColor : '#eff1f4',
                    borderRadius : 2,
                    padding : 20,
                    flex : 1,
                    alignItems :'center'



                    }}>

                    <TouchableHighlight style={{
                        backgroundColor : '#c1077a',
                        width : 70,
                        height : 70,
                        borderRadius : 70/2,
                        alignItems : 'center',
                        justifyContent : 'center',
                        borderColor : 'purple'

                    }}
                    onPress={()=>{
                        //alert("test")
                        ToastAndroid.show('Super !!!', ToastAndroid.SHORT);
                    }}
                    >
                    <Icon name= 'healing' size={65} color="white" />
                    </TouchableHighlight>
                    <Text>Care Plan</Text>
                    </View>




                    </View>

                    <View>
                    <View style={{flexDirection : 'row',justifyContent : 'center'}}>

                    <View style ={{flex : 1,alignItems : 'center'}}>
                    <TouchableHighlight
                    onPress={()=>{this.props.navigator.push({name:'deductable'})}}
                    >
                    <Text style={{fontSize : 30}}>
                    $3220
                    </Text>
                    </TouchableHighlight>
                    <Icon name= 'chevron-right' size={40} color="skyblue" />
                    <Text style = {{textAlign :'center'}}>Deductable Details</Text>
                    </View>

                    <View style ={{flex : 1,alignItems : 'center'}}>
                    <TouchableHighlight
                    onPress={()=>{this.props.navigator.push({name:'deductable'})}}
                    >
                    <Text style={{fontSize : 30}}>
                    $3220
                    </Text>
                    </TouchableHighlight>
                    <Icon name= 'chevron-right' size={40} color="skyblue" />
                    <Text style = {{textAlign :'center'}}>Deductable Details</Text>
                    </View>


                    </View>


                    <Image
                    style = {{
                    width : window.width,
                    height : 400,
                    alignSelf:'center'
                    }}
                    source={require('./resources/weather.png')}
                    resizeMode = {Image.resizeMode.contain}

                    />


                    </View>

                    </View>



            </View>





           </View>




           </ScrollView>

           <TabBarNavigator navigator={this.props.navigator}/>


           </View>


            )
    }
}




// exporting the clas as WelcomeScreen so it can be used in other classes
export default WelcomeScreen
