import React from 'react';
import LikeDisplayer from "./like-displayer.js";

class Counter extends React.Component {
  constructor(props) {
    console.log("GetInitialState")
    super(props);
    this.state = {likeCount: 0};
    this.onLike = this.onLike.bind(this);
  }

  componentWillMount(){
    console.log(" Counter :: componentWillMount ::");
  }

  componentDidMount(){
    console.log(" Counter :: componentDidMount ::");
  }

  componentWillUpdate(){
    console.log(" Counter :: componentWillUpdate ::");
  }

  componentDidUpdate(){
    console.log(" Counter :: componentDidUpdate ::");
  }

  onLike(){
    let count = this.state.likeCount + 1;
    this.setState({likeCount:count});
  }

  render(){
    return (
      <div>
        <LikeDisplayer likeCount={this.state.likeCount}></LikeDisplayer>
        <div>
            <button onClick={this.onLike}>Like Me</button>
        </div>
      </div>
    );
  }
}

export default Counter;
