import React from "react";
import "./landingPage.css";
// import Container from "../../components/container";
// import Row from "../../components/row"
// import Col from "../../components/Col"

import {Container,Row,Col} from "react-bootstrap";
import { Route, Link } from 'react-router-dom';

function LandingPage() {
    
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <img alt="logo" id="hands" className="center" src="./images/hands2.png" />
                        <h1 id="title" className="title">HelpHub</h1>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>

                        <h1 className="title">Connecting Non-Profits to Volunteers</h1>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p id="statement">HelpHub is an opportunity for Volunteers and Non-Profits to connect. Stay engaged with your community, find your way to making a positive impact. There is no gift like the present!</p>
                    </Col>
                </Row>
                <Row>
                    <br /><br /><br /><br /><br /><br />
                </Row>
                <Row>
                    <Col>
                        <img alt="non-profits" src="./images/button.png" />
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <Link to="/login" className> <img alt="volunteers" src="./images/button(1).png"/></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default LandingPage

