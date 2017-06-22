import React from 'react';
export default class Profile extends React.Component {
  render() {
    let user = this.props.user;
    if (user.notFound === 'Not Found')
      return (
         <div>
            No user found
         </div>
      );
      else
      return (
        <section>
          <div>
            <img src={user.avatar} alt={user.username}/>
            <h2>
              <a href={user.homeUrl} title={user.username} target="_blank">{user.name || user.username}</a>
            </h2>
            <h2>{user.location}</h2>
          </div>
          <div>
            
            <label> Repositories : </label>  
              {user.repos}            
            <br/>
            <label> Followers : </label> 
              {user.followers}           
            <br/>
            <label> Following : </label>
              {user.following}
            <br/>

          </div>
        </section>
      );
  }
}