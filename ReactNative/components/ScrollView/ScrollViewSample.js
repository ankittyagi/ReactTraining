import React from 'react';
import {
  Text,
  ScrollView, 
  Image
} from 'react-native';


class ScrollViewSample extends React.Component {

  render() {
    return (
      <ScrollView>
          <Text style={{fontSize:20}}>Scrolling</Text>
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          <Image source={require('../icon.png')} />
          
        </ScrollView>
    );
  }
}

export default ScrollViewSample;
