import React from 'react';
import {
  Text,
  View
} from 'react-native';


class StateSample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    console.log("render method");

    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
    
  }
}

export default StateSample;
