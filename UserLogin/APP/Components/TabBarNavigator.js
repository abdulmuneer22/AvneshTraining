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

import Icon from 'react-native-vector-icons/MaterialIcons';


class TabBarNavigator extends Component {
    render(){
        return(
            <View style={{
                backgroundColor : 'skyblue',
                
                flexDirection : 'row',
                paddingLeft : 10,
                paddingRight : 10,
                height : 40

            }}>
            <View style={{
                    flex :1,
                    padding : 10,
                    paddingBottom : 10

                    }}>
                    <TouchableOpacity
                    underlayColor = {'#efefef'}
                    style={{alignItems : 'center'}}
                    >
                    <Icon name={'home'} size={25} color="white" />
                    <Text style={{color : 'white',textAlign : 'center'}}>Home</Text>
                    </TouchableOpacity>
            </View>

            <View style={{
                    flex :1,
                    padding : 10,
                    paddingBottom : 10

                    }}>
                    <TouchableOpacity
                    underlayColor = {'#efefef'}
                    style={{alignItems : 'center'}}
                    >
                    <Icon name={'navigation'} size={25} color="white" />
                    <Text style={{color : 'white',textAlign : 'center'}}>Drop Locator</Text>
                    </TouchableOpacity>
            </View>

            <View style={{
                    flex :1,
                    padding : 10,
                    paddingBottom : 10

                    }}>
                    <TouchableOpacity
                    underlayColor = {'#efefef'}
                    style={{alignItems : 'center'}}
                    >
                    <Icon name={'local-taxi'} size={25} color="white" />
                    <Text style={{color : 'white',textAlign : 'center'}}>Find Ride</Text>
                    </TouchableOpacity>
            </View>

            <View style={{
                    flex :1,
                    padding : 10,
                    paddingBottom : 10

                    }}>
                    <TouchableOpacity
                    underlayColor = {'#efefef'}
                    style={{alignItems : 'center'}}
                    >
                    <Icon name={'more'} size={25} color="white" />
                    <Text style={{color : 'white',textAlign : 'center'}}>More ..</Text>
                    </TouchableOpacity>
            </View>
            
            </View>


        );
    }

}


export default TabBarNavigator
