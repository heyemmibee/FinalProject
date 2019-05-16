import React from "react";
import "./landingPage.css";
// import Container from "../../components/container";
// import Row from "../../components/row"
// import Col from "../../components/Col"
import {Container,Row,Col} from "react-bootstrap"

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
                    </Col>
                </Row>
                <Row>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                </Row>
                <Row>
                    <Col>
                        <img alt="non-profits" src="./images/button.png" />
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <img alt="volunteers" src="./images/button(1).png" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default LandingPage

