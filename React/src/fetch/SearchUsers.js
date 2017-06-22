import React from 'react';
export default class SearchUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }
  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchUsers(this.state.username);
  }
  render() {
    return (
      <div>
         <form onSubmit={()=>this.handleSubmit}>
           <label><input onChange={()=>this.handleChange} placeholder="Search"/></label>
         </form>
      </div>
    )
  }
}