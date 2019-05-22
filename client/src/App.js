import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Dasboard from "./pages/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      id: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
    this.setState({
      loggedIn: false
    })
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        console.log(response.data);

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          id: response.data.user._id
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/profile"
            render={() => <ProfilePage username={this.state.username} loggedIn={this.state.loggedIn} id={this.state.id} />}
          />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/login"
            render={() => <LogIn updateUser={this.updateUser} />}
          />
          <Route
            exact
            path="/dashboard"
            render={() => <Dasboard updateUser={this.updateUser} username={this.state.username} loggedIn={
              this.state.loggedIn} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
