import React from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';


class TextInputSample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.updateText = this.updateText.bind(this);
    this.translateText = this.translateText.bind(this);
  }

  updateText(text){
  	this.setState({text: text});
  }

  translateText(){
  	let text = this.state.text.split(' ');
    text = text.map((word) => word && '🍕').join(' ');
  	return text;
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40, width: 150}}
          placeholder="Type here !"
          onChangeText={this.updateText}
        />
        <Text style={{padding: 10, fontSize: 22}}>
          {this.translateText()}
        </Text>
      </View>
    );
  }
}

export default TextInputSample;
