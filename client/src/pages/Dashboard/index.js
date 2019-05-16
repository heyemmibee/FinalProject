import React from "react";
import "./dashboard.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {Link} from "react-router-dom"

function Dashboard() {
    return (
        <div>
            <Nav className="navbar">
                <h1 id="navTitle" ><img src="./images/hands2.png" width="45" height="45" class="d-inline-block align-top" alt="" />  HelpHub</h1>
                <div className="ml-auto">
                    <Link to="/profile"class="link"><h4 className="links d-inline">Profile  </h4></Link>
                    <Link to="/login" className="link"><h4 className="links d-inline">|  Logout</h4></Link>
                </div>
            </Nav>
            <Container>

                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default Dashboard