import React from 'react';
import ReactDOM from 'react-dom';
import SearchUsers from './SearchUsers';
import Profile from './Profile';


const API_URL = 'https://api.github.com/users';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'ankittyagi',
      name:'',
      avatar:'',
      location:'',
      repos:'',
      followers: '',
      following:'',
      homeUrl:'',
      notFound:''
    }
  }
  fetchUsers(username) { 
    let url = `${API_URL}/${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((user) => {
        this.setState({
          username: user.login,
          name: user.name,
          avatar: user.avatar_url,
          location: user.location,
          repos: user.public_repos,
          followers: user.followers,
          following: user.following,
          homeUrl: user.html_url,
          notFound: user.message
        })
      })
      .catch((error) => console.log('there is a Error') )
  }
  componentDidMount() {
    this.fetchUsers(this.state.username);
  }
  render() {
    return (
      <div>
         <section>
           <SearchUsers fetchUsers={this.fetchUsers.bind(this)}/>
           <Profile user={this.state} />
         </section>
      </div>
    )
  }
}


document.addEventListener('DOMContentLoaded', function() {
 ReactDOM.render(<App/>,
   document.getElementById('app')
 );
});