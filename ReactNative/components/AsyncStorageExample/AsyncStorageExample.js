
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  AsyncStorage,
} from 'react-native';

export default class AsyncStorageExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
          myKey: ''
        };
      }
     async componentDidMount() {
        try {
          const value = await AsyncStorage.getItem('myKey');
          if (value !== null){
            // We have data!!
            this.setState({"myKey": value});
          }
        } catch (error) {
          // Error retrieving data
        }
    }

    getInitialState() {
        return { };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.saved}>
                    {this.state.myKey}
                </Text>
                <View>
                    <TextInput
                        style={styles.formInput}
                        editable = {true}
                        maxLength = {40}
                        onChangeText ={(text) => this.saveData(text)}
                        />
                </View>
                <Text style={styles.instructions}>
                    Type something into the text box.  It will be saved to
                    device storage.  Next time you open the application, the saved data
                    will still exist.
                </Text>
            </View>
        );
    }

    async saveData(value) {
        try {
          await AsyncStorage.setItem('myKey', value);
          this.setState({"myKey": value});
        } catch (error) {
          // Error saving data
        }
        
    }

}

var styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#F5FCFF",
    },
    formInput: {
        height: 26,
        fontSize: 13,
        borderWidth: 1,
        borderColor: "black",
        color: 'red'
    },
    saved: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
        marginTop: 5,
    },
});

