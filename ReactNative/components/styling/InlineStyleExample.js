import React from 'react';
import {
  Text,
  View
} from 'react-native';


class InlineStyleExample extends React.Component {

  render() {
    return (
       <View style={{padding:25}}>
        <Text style={{color: 'red'}}>just red</Text>
        <Text style={[{color: 'blue'}, {fontSize: 30}]}>just bigblue</Text>
      </View>
    );
  }
}
var obj = {color:"red"};

export default InlineStyleExample;
