import React from "react";
import "./profilePage.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {Link} from "react-router-dom"


function ProfilePage() {
    return (

        <div>
            <Nav className="navbar">
                <h1 id="navTitle" ><img src="./images/hands2.png" width="45" height="45" class="d-inline-block align-top" alt="" />  HelpHub</h1>
                <div className="ml-auto">
                    <Link class="link" to="/dashboard"><h4 className="links d-inline">Dashboard  </h4></Link>
                    <Link class="link" to="/login"><h4 className="links d-inline">|  Logout</h4></Link>
                </div>
            </Nav>
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
                    <h1 class="pageTitle">Profile</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form>
                            <div className="form-group">
                                <label for="name" className="input">Name</label>
                                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1" className="input">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label for="Phone" className="input">Phone Number</label>
                                <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="202-555-5555" />
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputCity" className="input">City</label>
                                    <input type="text" class="form-control" id="inputCity" placeholder="Arlington" />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState" className="input">State</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DC">District of Columbia</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="IA">Iowa</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MD">Maryland</option>
                                        <option value="ME">Maine</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MT">Montana</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NY">New York</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VA">Virginia</option>
                                        <option value="VT">Vermont</option>
                                        <option value="WA">Washington</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputZip" className="input">Zip</label>
                                    <input type="text" class="form-control" id="inputZip" placeholder="22201"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlSelect1" className="input">Amount Of Time That You Can Commit</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>0-5 hours/week</option>
                                    <option>5-10 hours/week</option>
                                    <option>10-15 hours/week</option>
                                    <option>15-20 hours/week</option>
                                    <option>20+ hours/week</option>
                                </select>
                            </div>

                            {/* <Col> */}
                                <Row>
                                    <Col>
                                        <div>
                                            <label id="interests" className="input">Interests</label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Cooking & Baking 
</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Community Cleanups
</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Teaching & Training</label>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Gardening & Landscaping</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Events & Advertising</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Environment & Wildlife</label>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Mental Health & Fitness</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Harvest & Farming</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Home Improvement & DIY</label>
                                        </div>
                                    </Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div>
                                            <label id="skills" className="input">Skills (What Do You Bring To The Table?)</label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Administration</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Event Planning</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Finance & Bookkeeping</label>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Heavy Lifting</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Computer Software</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Teaching & Childcare</label>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Transportation & Driving</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Writing & Editing</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="" /> Guest Speaking</label>
                                        </div>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            {/* </Col> */}
                        </form>
                    </Col>
                </Row >
                <Row>
                    <Col></Col>
                    <Col><img id="submit" src="./images/submit.png" /></Col>

                </Row>
                <br /> <br /> <br /> <br />
            </Container >
        </div >
    )


}


export default ProfilePage