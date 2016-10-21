import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid , View , Text , TouchableHighlight} from 'react-native'


class DrawerContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      CloseMenu : this.props.Close
    }

    console.log(this.state.CloseMenu);
  }

  

  render(){
    return(
      <View>
      <Text>
      DrawerContent
      </Text>

      <TouchableHighlight
      onPress={this.props.closeDrawer}
      >
      <Text>
      Close
      </Text>
      </TouchableHighlight>
      </View>
    );
  }
}

export default DrawerContent
