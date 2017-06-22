import React from 'react';
import LikeDisplayer from "./like-displayer.js";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likeCount: 0};
    this.onLike = this.onLike.bind(this);
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
