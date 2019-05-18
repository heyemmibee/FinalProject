import React from 'react';

import OnlineUser from '../OnlineUser';

class OnlineUsers extends React.Component {

  render() {
    // Loop through all the users in the state and create a OnlineUsers component
    const onlineUsers = this.props.onlineUsers.map((onlineUser, i) => {
        return (
          <OnlineUser
            key={i}
            username={onlineUser} />
        );
      });

    return (
      <div className='online_users h-100' id='onlineUsersList'>
        { onlineUsers }
      </div>
    );
  }
}

OnlineUsers.defaultProps = {
  onlineUsers: []
};

export default OnlineUsers;