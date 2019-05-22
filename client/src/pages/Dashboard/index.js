import React, { Component } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import axios from "axios"
import ChatApp from "../../components/Chat/ChatApp";

import "./dashboard.css";

class Dasboard extends Component {
  constructor(props) {
    console.log("Dashboard : constructor");
    super(props);
    this.state = {
      redirectTo: null,
      loggedIn: false
    };
    this.username = this.props.username;
    this.loggedIn = this.props.loggedIn;
    this.logout = this.logout.bind(this);
    console.log("username : " + this.username);
    console.log("loggedIn : " + this.loggedIn);
  }

  componentWillMount() {
    // Redirect to login page if user is not logged in.  Do it before first render.
    if (this.loggedIn === false) {
      this.setState({
        redirectTo: "/login"
      });
    }
  }

  componentDidMount() {
    this.getUser()
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
  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log("hello" + response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null,
        })
        this.setState({
          redirectTo: '/login'
      })
      }
    }).catch(error => {
        console.log('Logout error')
        console.log(error)
    })
  }


  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <Nav className="navbar" updateUser={this.updateUser} loggedIn={this.state.loggedIn}>
            <h1 id="navTitle">
              <img
                src="./images/hands2.png"
                width="45"
                height="45"
                className="d-inline-block align-top"
                alt=""
              />{" "}
              HelpHub
            </h1>
            <div className="ml-auto">

            <h4 className="d-inline">Hello {this.username}!  </h4>
              <Link to="/profile" className="link">
                <h4 className="links d-inline">Profile </h4>
              </Link>
              <Link className="link" to="/login">
                <h4 className="links d-inline" onClick={this.logout}>| Logout</h4>
              </Link>
            </div>
          </Nav>
          <Container>
            <Row>
              <Col />
            </Row>

            <Row>
              <Col>
                <ChatApp username={this.username} />
              </Col>
            </Row>
            <br />

            <Row>
              <Col>
                <div id="blog-card" className="card overflow-auto">
                  <div className="card-header">
                    <h1>Droid Rescue Blog</h1>
                  </div>
                  <div className="card-body">
                    <Row>
                      <Col sm="3">
                        <img src="./images/droid2.png" alt="" />
                      </Col>
                      <Col sm="9">
                        <h5 className="card-title">
                          {"What's Happening with Droids Today"}
                        </h5>
                        <p className="card-text">
                          Alert! Despite the value being discovered in using
                          droids in new ways, as detailed in the previous post,
                          more and more droids are being dismantled by those who
                          simply want to cash in on the metals and other
                          valuable materials from which they were originally
                          created.
                        </p>
                        <p>
                          Volunteers should be on the lookout for droid
                          “recycling” centers, which are only covers for this
                          destructive trend. Droids themselves are being
                          targeted by groups that try to tell them that with a
                          few “changes” they can have entirely new capabilities.{" "}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="3">
                        <img src="./images/droid.png" alt="" />
                      </Col>
                      <Col sm="9">
                        <h5 className="card-title">
                          {"Can Old Droids Learn New Tricks?"}
                        </h5>
                        <p className="card-text">
                          Once droids were known for their ability to use
                          holograms to transmit messages that carried detailed
                          information from one place to another, usually
                          involving highly complex military secrets. The
                          reliability of droids made their hologram message
                          system invaluable. These days, however, there is
                          little call for droids to be used in this capacity.
                          Some have come up with a clever way of using the
                          technology in an entirely new way.
                        </p>
                        <p>
                          Called “Hologram Homeviews,” the technology is being
                          put to use by interior decorators who want their
                          clients to be able to look at various design
                          possibilities in a unique way. They are using droids
                          to replicate three-dimensional pictures of client
                          rooms that are then displayed in several different
                          potential styles suggested by the decorator. The
                          accuracy and detail of these representations lets
                          clients explore each room as it could be and increases
                          their ability to make realistic choices about changing
                          their environment. Holograms are flexible and can be
                          altered quickly, so they save time and money for
                          everyone involved.
                        </p>
                        <p>
                          Professionals in a variety of areas, such as fashion
                          design, are taking a look at the success of this
                          program, since they can see how easily such holograms
                          could translate to offering customers -- no matter
                          where they are located -- the chance to try on and
                          purchase individually tailored garments, created with
                          each individual in mind, thanks to new ways of looking
                          at droids.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
                <br /><br />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default Dasboard;
