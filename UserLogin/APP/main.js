import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';


import Button from './Components/Button'
import StatusBar from './Components/StatusBar'

const window = Dimensions.get('window');
class Main extends Component {
    constructor(){
        super();
        this.state={
            userName : '',
            password : '',
            isLoggedIn : false,
            error : ''
        }
    }

handleChildFunc(){
    //this.setState({userName : '',password :''})
    alert("test")
}

    render(){

    return(
        <View style={{
            backgroundColor : '#0184ba',
            flex : 1,
           
        }}>

        
        
        <View style={{
            alignItems : 'center',
            marginTop : 0
           
        }}>

        

        
        <View style={{marginTop : 20,marginBottom : 40}}>
        <Text style={{
        fontSize : 40,
        color : 'white'
        }}>Florida Blue</Text>
        </View>


        <View>


        <View style={{
        marginTop : 20,backgroundColor : 'white',padding : 5
        }}>

        <TextInput
        
        style={{
        alignItems : 'center',
        alignSelf : 'center',
        width : window.width*0.7,
        height : 40,
        color : 'black'

        }}
        placeholder="User Name"
        onChangeText = {(text) => {
            this.setState({userName:text})
            
        }}
        value={this.state.userName}

        />


        
        
        
        </View>

        <View style={{
        marginTop : 20,backgroundColor : 'white',padding : 5
        }}>

        <TextInput
        secureTextEntry={true}
        style={{
        alignItems : 'center',
        alignSelf : 'center',
        width : window.width*0.7,
        height : 40,
        color : 'black'

        }}
        placeholder="Password"
        onChangeText = {(text) => {
            this.setState({password:text})
            
        }}
        value={this.state.password}

        />


        
        
        
        </View>

        
        <View>
         <Text style={{
            marginTop : 10,
            color : 'orange',
            fontSize : 16
        }}>{this.state.error}</Text>
        </View>

        
        
        <View
        style ={{
            marginTop : 30,
            //borderColor : 'black',
            //borderWidth : 1,
            flexDirection : 'row'
            
        }}
        
        >
        


        <TouchableOpacity
                onPress={()=>{
                    if(!this.state.userName | !this.state.password){
                        //alert("No User")
                        this.setState({error: "Please Enter User Name and Password"})
                    }else{
                        if(this.state.userName == 'member' && this.state.password == '1234'){
                            this.props.navigator.push({name : 'welcomeScreen'})
                        }else{
                        this.setState({error: "Invalid User Name Or Password"})
                            
                        }


                        
                    }
                }}
                style={{
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
                           
                }}
                
                >
                <Text style={{
                            fontSize : 16,
                            fontWeight : 'bold',
                            color : 'black'
                }}>Login</Text>
                </TouchableOpacity>


        <View style={{
            flex : 1
        }}>
        <TouchableOpacity
                onPress={()=>{this.setState({userName : '', password : ''})}}
                style={{
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
                           
                }}
                
                >
                <Text style={{
                            fontSize : 16,
                            fontWeight : 'bold',
                            color : 'black'
                }}>Clear</Text>
                </TouchableOpacity>
        </View>
        
        
        </View>


        
        

        <View style={{flexDirection : 'row',marginTop :10}}>
        <Text style={{
            color : 'white',
            alignSelf : 'flex-start',
            //marginLeft : 50,
            flex : 1,
            textAlign : 'left'
            }}
            onPress={()=>{this.props.navigator.push({name : 'register'})}}
            >
            Register
    
        </Text>

        <Text style={{
            color : 'white',
            alignSelf : 'flex-end',
            //marginRight : 60,
            flex : 1,
            textAlign : 'right'
            }}
            onPress={()=>{this.props.navigator.push({name : 'forgotPassword'})}}
            >Forgot Password ?</Text>
        </View>

        </View>
        

        </View>



    </View>);

    }

}


export default Main