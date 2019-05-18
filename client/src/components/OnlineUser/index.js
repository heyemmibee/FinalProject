import React from "react";

class OnlineUser extends React.Component {
  render() {
    return <div className="online_user">{this.props.username}</div>;
  }
}

OnlineUser.defaultProps = {
  username: ""
};

export default OnlineUser;
