import React from 'react';
import {
  Text,
  View,
  Alert,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';


class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
    };
  }

  getMoviesFromApiAsync() {
  	this.setState({
      animating: true,
    });
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
      	this.setState({
	      animating: false,
	    });
        Alert.alert("Error while loading a file");
      });
  }

  showMoviesInfo(){
  	let moviesInfoPromise = this.getMoviesFromApiAsync();
  	let moviesInfo = [];
  	let objThis = this;
  	moviesInfoPromise
      .then(function(data){
    		objThis.setState({
  	      animating: false,
  	    });
    		data.forEach((item) => {
    			moviesInfo.push(item.title);
    		});
    		console.log(moviesInfo) 
    		Alert.alert("Movie Information", moviesInfo.toString());
    	})
      .catch((error) => {
          console.log("Error")
      });
  }

  render() {
    return (
    	<View style={styles.container}>
	    	<ActivityIndicator
	    		animating = {this.state.animating}
	            size="large"
	            color="#0000ff"
	          />
    		<TouchableHighlight style={ styles.button } onPress={ () => this.showMoviesInfo() }>
          		<Text style={ styles.buttonText }>Fetch data</Text>
        	</TouchableHighlight>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   	marginTop: 80
  },
  button: {
  	height:50,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
  	fontSize:12
  }
});


export default FetchExample;
