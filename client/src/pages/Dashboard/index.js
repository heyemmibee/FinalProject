import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChatApp from "../../components/ChatApp";

import "./dashboard.css";


function Dasboard() {
  // TODO : Grab username from express session here.
  let username = "RandomUser";
  console.log("username : " + username);

  return (
    <div>
      <Nav className="navbar">
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
          <Link to="/profile" className="link">
            <h4 className="links d-inline">Profile </h4>
          </Link>
          <Link to="/login" className="link">
            <h4 className="links d-inline">| Logout</h4>
          </Link>
        </div>
      </Nav>
      <Container>
        <Row>
          <Col />
        </Row>
        <Row>
          <Col>
            <ChatApp username={username} />
          </Col>
        </Row>
        <Row>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default Dasboard;
