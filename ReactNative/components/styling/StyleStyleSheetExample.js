import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';


class StyleStyleSheetExample extends React.Component {

  render() {
    return (
       <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
   padding: 25
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
});

export default StyleStyleSheetExample;
