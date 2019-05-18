import React from "react";

class OnlineUser extends React.Component {
  render() {
    return (
      <div className="online_user">
        <img
          src="./images/female_user.png"
          width="45"
          height="45"
          className="d-inline-block align-top"
          alt="female_user"
        />
        {this.props.username}
      </div>
    );
  }
}

OnlineUser.defaultProps = {
  username: ""
};

export default OnlineUser;
