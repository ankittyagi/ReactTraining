import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class ButtonBasics extends Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
    button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 5
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})
