import React from 'react';
import {
  Text,
  View
} from 'react-native';


class Greeting extends React.Component {

  render() {
    return (
        <View>
         	<Text>Hey {this.props.name}!</Text>
        </View>
    );
  }
}

export default Greeting;
