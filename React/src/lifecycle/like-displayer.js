import React from 'react';

class LikeDisplayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    console.log(" LikeDisplayer :: componentWillMount ::");
  }

  componentDidMount(){
    console.log(" LikeDisplayer :: componentDidMount ::");
  }

  componentWillReceiveProps(){
    console.log(" LikeDisplayer ::componentWillRecieveProps:: ");
  }

  shouldComponentUpdate(){
    console.log(" LikeDisplayer ::shouldComponentUpdate:: ");
    var updateComponent = false;
    return updateComponent;
  }

  componentWillUpdate(){
    console.log(" LikeDisplayer :: componentWillUpdate ::");
  }

  componentDidUpdate(){
    console.log(" LikeDisplayer :: componentDidUpdate ::");
  }

  render(){
    return (
      <div>
        Likes: <span>{this.props.likeCount}</span>
      </div>
    );
  }
}

LikeDisplayer.defaultProps = {
  likeCount: 0
};

export default LikeDisplayer;
