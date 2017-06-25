/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HelloWorld from './components/HelloWorld'

// props and state
import Greeting from './components/props/Greetings' 
import StateSampleContainer from './components/state/StateSampleContainer' 

//styling
import InlineStyleExample from './components/styling/InlineStyleExample' 
import StyleObjectExample from './components/styling/StyleObjectExample' 
import StyleStyleSheetExample from './components/styling/StyleStyleSheetExample' 

import TouchableButtonExample from './components/TouchableExample/TouchableButtonExample'

// some available components
import ButtonBasics from './components/ButtonSample/ButtonBasics'
import TextInputSample from './components/TextInput/TextInputSample'
import ScrollViewSample from './components/ScrollView/ScrollViewSample'
import ListViewSample from './components/ListView/ListViewSample'
import FlatListBasics from './components/ListView/FlatList'
import SectionListBasics from './components/ListView/SectionList'

import WebViewSample from './components/WebView/WebViewSample'
import AsyncStorageExample from './components/AsyncStorageExample/AsyncStorageExample'

export default class reactNativeTraining extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <WebViewSample/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('reactNativeTraining', () => reactNativeTraining);
