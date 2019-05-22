import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";
import "./Login.css";
import { Container, Row, Col } from "react-bootstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null,
      loggedIn: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignin = this.handleSignin.bind(this)
  }
  componentDidMount() {
    // this.getUser(),
    this.setState({
      loggedIn: false
    })
}
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username,
            id: response.data.id
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/dashboard"
          });
          
        }
                
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
        alert("username or password is not correct");
            
      });
  }

  
  handleSignin(event) {
    console.log('sign-up handleSubmit, username: ')
    // console.log(this.state.username)
    event.preventDefault()

    //request to server to add a new username/password
    axios.post('/user/', {
        username: this.state.username,
        password: this.state.password
    })
        .then(response => {
            console.log(response)
            if (!response.data.errmsg) {
                alert("Success!")
                console.log('successful signup')
                // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username,
            id: response.data._id
          });
                this.setState({ //redirect to login page
                    redirectTo: '/profile'
                })
            } else {
                console.log('username already taken');
                alert("username already taken")
            }
        }).catch(error => {
            console.log('signup error: ')
            console.log(error)

        })
}

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <Container>
            <Row>
              <Col />
              <Col>
                <img
                  alt="logo"
                  id="hands"
                  className="center"
                  src="./images/hands2.png"
                />
                <h1 id="title" className="title">
                  HelpHub
                </h1>
              </Col>
              <Col />
            </Row>
            <br />
            <Row>
              <Col>
                <h1 id="loginTitle" className="title">
                  Login
                </h1>
              </Col>
            </Row>
            <br />
            <Row>
              <Col />
              <Col>
                <form>
                  <Row>
                    <Col>
                      <label htmlFor="username">Username</label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <label className="form-label" htmlFor="password">
                        Password:{" "}
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <input
                        id="password"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                  <br />

                  <img id="signup" src="./images/signup.png" onClick={this.handleSignin} alt="" />
                  <img
                    src="./images/login.png"
                    onClick={this.handleSubmit}
                    alt=""
                  />
                </form>
              </Col>
              <Col />
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default Login;
