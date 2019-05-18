import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChatApp from "../../components/Chat/ChatApp";

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
        <br/>
    
    
                <Row>
                    <Col>
                        <div id="blog-card" className="card overflow-auto">
                            <div className="card-header">
                                <h1>Droid Rescue Blog</h1>
                            </div>
                            <div className="card-body">
                            <Row>
                            <Col sm="3"><img src="./images/droid2.png" /></Col>
                            <Col sm="9">
                                
                                <h5 className="card-title">{"What's Happening with Droids Today"}
                                </h5>
                                <p className="card-text">Alert! Despite the value being discovered in using droids in new ways, as detailed in the previous post, more and more droids are being dismantled by those who simply want to cash in on the metals and other valuable materials from which they were originally created.</p>
                                <p>Volunteers should be on the lookout for droid “recycling” centers, which are only covers for this destructive trend. Droids themselves are being targeted by groups that try to tell them that with a few “changes” they can have entirely new capabilities. </p>
                                </Col>
                                </Row>
                                <Row>
                            <Col sm="3"><img src="./images/droid.png" /></Col>
                            <Col sm="9">
                                
                                <h5 className="card-title">{"Can Old Droids Learn New Tricks?"}
                                </h5>
                                <p className="card-text">Once droids were known for their ability to use holograms to transmit messages that carried detailed information from one place to another, usually involving highly complex military secrets. The reliability of droids made their hologram message system invaluable. These days, however, there is little call for droids to be used in this capacity. Some have come up with a clever way of using the technology in an entirely new way.</p><p>Called “Hologram Homeviews,” the technology is being put to use by interior decorators who want their clients to be able to look at various design possibilities in a unique way. They are using droids to replicate three-dimensional pictures of client rooms that are then displayed in several different potential styles suggested by the decorator. The accuracy and detail of these representations lets clients explore each room as it could be and increases their ability to make realistic choices about changing their environment. Holograms are flexible and can be altered quickly, so they save time and money for everyone involved.</p><p>Professionals in a variety of areas, such as fashion design, are taking a look at the success of this program, since they can see how easily such holograms could translate to offering customers -- no matter where they are located -- the chance to try on and purchase individually tailored garments, created with each individual in mind, thanks to new ways of looking at droids.</p>
                                </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
    
      </Container>
    </div>
  );
}

export default Dasboard;
