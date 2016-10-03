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


const window = Dimensions.get('window');
const wrapperheight = window.height -80
const bottomheight = window.height - wrapperheight
import StatusBar from '../Components/StatusBar'

class WelcomeScreen extends Component{
    render(){
        return(
            <View>

                <ScrollView style={{
                    backgroundColor : '#f4f5f7',
                    height : wrapperheight
                
                }}>
                <View style={{marginTop : 20,alignItems : 'center',flexDirection : 'row'}}>
                <View style={{
                alignItems : 'center',
                flex : 8,
                justifyContent : 'center'
                }}>
                <Text style={{fontSize : 40,
                color : '#2196F3'}}>
                Florida Blue
                </Text>
                </View>
                <TouchableOpacity style={{flex : 1,alignItems :'flex-end'}} onPress={()=>{alert("pressed chat bubble")}}>
                <Icon name= 'chat-bubble' size={40} color="blue"/>
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
                    onPress={()=>{this.props.navigator.push({name : 'paynow'})}}
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
                    <View style={{
                        backgroundColor : 'purple',
                        width : 70,
                        height : 70,
                        borderRadius : 70/2,
                        alignItems : 'center',
                        justifyContent : 'center',
                        borderColor : 'purple'
                       
                    }}>
                    <Icon name= 'credit-card' size={40} color="white" />
                    </View>
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

                    <View style={{
                        backgroundColor : '#c1077a',
                        width : 70,
                        height : 70,
                        borderRadius : 70/2,
                        alignItems : 'center',
                        justifyContent : 'center',
                        borderColor : 'purple'
                       
                    }}>
                    <Icon name= 'healing' size={65} color="white" />
                    </View>
                    <Text>Care Plan</Text>
                    </View>
                    
                    
                    </View>

                    </View>



            </View>


            <View style={{flexDirection : 'row',justifyContent : 'center'}}>
                    
                    <View style ={{flex : 1,alignItems : 'center'}}>
                    <Text style={{fontSize : 30}}>$3220</Text>
                    <Text>of $3220</Text>
                    <Icon name= 'chevron-right' size={40} color="skyblue" />
                    
                    
                    <Text style = {{textAlign :'center'}}>Deductable Details</Text>
                    </View>

                    <View style ={{flex : 1,alignItems : 'center'}}>
                    <Text style={{fontSize : 30}}>$3220</Text>
                    <Text>of $3220</Text>
                    <Icon name= 'chevron-right' size={40} color="skyblue" />
                    
                    
                    <Text style = {{textAlign :'center'}}>FSA Transactions</Text>
                    </View>
            </View>

            <View>
                    <Image
                    style = {{
                    width : 400,
                    height : 400,
                    alignSelf:'center'
                    }}
                    source={require('./resources/weather.png')}
                    resizeMode = {Image.resizeMode.contain}

                    />
                    
            </View>


            </ScrollView>
            <View style={{
                backgroundColor : 'skyblue',
                height : bottomheight,
                flexDirection : 'row',
                paddingLeft : 10,
                paddingRight : 10
                
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

            </View>
            )
    }
}


export default WelcomeScreen