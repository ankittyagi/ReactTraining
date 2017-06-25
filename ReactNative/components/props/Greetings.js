import React from 'react';
import {
  Text,
  View
} from 'react-native';

import Greeting from './Greeting';

class Greetings extends React.Component {

  render() {
    return (
       <View>
        <Greeting name='Ravi' />
        <Greeting name='Tom' />
        <Greeting name='Anna' />
      </View>
    );
  }
}

export default Greetings;
