import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image,
  StyleSheet
} from 'react-native';


class TouchableButtonExample extends React.Component {

  constructor(props){
  	super(props);
  	this.state = {
  		clicked: 0
  	};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{'Clicked: ' + this.state.clicked}</Text>
        <TouchableHighlight 
          onPress={() => this.setState({clicked: ++this.state.clicked})}>
          <Image
          style={{height:150,width:150}}
	        source={require('../ankit.jpg')}
	         />
        </TouchableHighlight>

        <TouchableOpacity style={styles.imgButton}
          onPress={() => this.setState({clicked: ++this.state.clicked})}>
          <Image
          style={{height:100,width:100}}
	        source={require('../icon.png')}
	      />
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    color: 'blue'
  },
  imgButton: {
  	padding: 10,


  },
  label: {
    marginBottom: 30
  }
});

export default TouchableButtonExample;
