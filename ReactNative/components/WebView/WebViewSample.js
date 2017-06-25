import React, { Component } from 'react';
import { WebView, StyleSheet, View } from 'react-native';

export default class WebViewSample extends Component {
  render() {

    return (
     <WebView 
          source={{uri: 'https://facebook.github.io/react-native/'}}
          style={styles.video}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  video: {
    marginTop: 20,
    maxHeight: 600,
    width: 340,
    flex: 1
  }
});