import React from 'react';
import {
  Text,
  View
} from 'react-native';


class StyleObjectExample extends React.Component {

  render() {
    return (
       <View style={container}>
        <Text style={red}>just red</Text>
        <Text style={bigblue}>just bigblue</Text>
        <Text style={[bigblue, red]}>bigblue, then red</Text>
        <Text style={[red, bigblue]}>red, then bigblue</Text>
      </View>
    );
    
  }
}

const container = { padding: 25 };
const bigblue = {
  color: 'blue',
  fontWeight: 'bold',
  fontSize: 30
}
const red = { color: 'red'};


export default StyleObjectExample;
