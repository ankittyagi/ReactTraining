import React from 'react';

class LikeDisplayer extends React.Component {
  constructor(props) {
    super(props);
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
