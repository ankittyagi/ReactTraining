import React from 'react';
import {
  Text,
  View
} from 'react-native';

import StateSample from './StateSample';

class StateSampleContainer extends React.Component {

  render() {
    return (
       <View>
        <StateSample text='I love to blink' />
        <StateSample text='Yes blinking is so great' />
        <StateSample text='Look at me ... look at me ... look at me ...' />
      </View>
    );
  }
}

export default StateSampleContainer;
