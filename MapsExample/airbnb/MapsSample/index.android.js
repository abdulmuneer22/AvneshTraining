import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import MapView from 'react-native-maps'
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export default class MapsSample extends Component {



  constructor(){
    super();

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
       markers: [],

  }
  }

   onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
  }


  render() {
    return (
      <View style={{flex : 1}}>
        <View style={{flex : 4}}>
        <View style={styles.Mapcontainer}>
        <MapView
        style={styles.map}
        
        region={this.state.mapLocation}
        >
        
        <MapView.Marker
        coordinate={this.state.marker.latlng}
        title={this.state.marker.title}
        description={this.state.marker.description}
        />
        
        </MapView>
        </View>
        </View>

        <View style={{flex : 2 }}>
        <TouchableHighlight
        onPress={()=>{
          //alert("Working !!")
          this.setState({
            mapLocation : {
              latitude: 12.9716,
              longitude: 77.5946,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }

          })
        }}
        >
        <Text>
        Go To Client Location
        </Text>
        </TouchableHighlight>

        <TouchableHighlight
        onPress={()=>{
          //alert("Working !!")
          this.setState({
            mapLocation : {
            latitude: 40.7127837,
            longitude: -74.00594130000002,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }

          })
        }}
        >
        <Text>
        Go Back to Newyork
        </Text>
        </TouchableHighlight>
        </View>

      </View>


    );
  }
}


const styles = StyleSheet.create({
controllers : {
  flex : 1,
  backgroundColor : 'green'
},

 Mapcontainer: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   flex : 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});


AppRegistry.registerComponent('MapsSample', () => MapsSample);
