import React, { Component } from "react";
import "./profilePage.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom"

import axios from 'axios';

class ProfilePage extends Component {
    state = {
        profiles: [],
        interests: {},
        skills: {},
        redirectTo: null,
        profileId: null
    };

    componentDidMount() {
        this.loadProfiles();
    }
    profileSubmit = () => {
        let name = document.getElementById("name").value;
        console.log(name);
        let email = document.getElementById("email").value;
        console.log(email);
        let phone = document.getElementById("phone").value;
        console.log(phone);
        let inputCity = document.getElementById("inputCity").value;
        console.log(inputCity);
        let inputState = document.getElementById("inputState").value;
        console.log(inputState);
        let inputZip = document.getElementById("inputZip").value;
        console.log(inputZip);
        let time = document.getElementById("time").value;
        console.log(time);
        let interests1 = document.getElementById("interests1").value;
        console.log(time);
        let interests2 = document.getElementById("interests2").value;
        console.log(time);
        let interests3 = document.getElementById("interests3").value;
        console.log(time);
        let skills1 = document.getElementById("skills1").value;
        console.log(time);
        let skills2 = document.getElementById("skills2").value;
        console.log(time);
        let skills3 = document.getElementById("skills3").value;
        console.log(time);


        var obj = {
            name: name,
            email: email,
            phone: phone,
            inputCity: inputCity,
            inputState: inputState,
            inputZip: inputZip,
            time: time,
            interests1: interests1,
            interests2: interests2,
            interests3: interests3,
            skills1: skills1,
            skills2: skills2,
            skills3: skills3,
        }
        console.log(obj);
        axios
            .post('/profile/profile/' + this.state.profileId, obj)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    this.setState({
                        redirectTo: '/dashboard'
                    })
                }
            }).catch(error => {
                console.log(error);

            })

    }
    checkboxInterests = (event) => {
        let copy = { ...this.state.interests }
        copy[event.target.value] = event.target.value;
        this.setState({ interests: copy })
        console.log(event.target.value);

    };
    checkboxSkills = (event) => {
        let copy = { ...this.state.skills }
        copy[event.target.value] = event.target.value;
        this.setState({ skills: copy })
        console.log(event.target.value);

    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            profiles: { [name]: value }
        });
    };
    loadProfiles = () => {
        console.log(this.props.id);
        axios.get("/profile/profile/" + this.props.id).then(res => this.setState({ profiles: res.data.profile, profileId: res.data.profile._id }))
        //   API.getProfiles()
        //     .then(res => this.setState({ profiles: res.data }))
        //     .catch(err => console.log(err));
    };
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />;
        }

        return (

            <div>
                <Nav className="navbar">
                    <h1 id="navTitle" ><img src="./images/hands2.png" width="45" height="45" className="d-inline-block align-top" alt="" />  HelpHub</h1>
                    <div className="ml-auto">
                        <h4 className="d-inline">Hello {this.props.username}!  </h4>
                        <Link className="link" to="/dashboard"><h4 className="links d-inline">Dashboard  </h4></Link>
                        <Link className="link" to="/login"><h4 className="links d-inline">|  Logout</h4></Link>
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
                            <h1 className="pageTitle">Profile</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form>
                                <div className="form-group">
                                    <label for="name" className="input">Name</label>
                                    <input type="name" name="name" className="form-control" id="name" placeholder="John Doe" value={this.state.profiles.name} onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1" className="input">Email address</label>
                                    <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" value={this.state.profiles.email} onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label for="Phone" className="input">Phone Number</label>
                                    <input type="phone" className="form-control" id="phone" placeholder="202-555-5555" value={this.state.profiles.phone} onChange={this.handleInputChange} />

                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputCity" className="input">City</label>
                                        <input type="text" className="form-control" id="inputCity" placeholder="Arlington" value={this.state.profiles.inputCity} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="inputState" className="input">State</label>
                                        <select id="inputState" className="form-control" value={this.state.profiles.inputState} onChange={this.handleInputChange}>
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
                                    <div className="form-group col-md-2">
                                        <label for="inputZip" className="input">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" placeholder="22201" value={this.state.profiles.inputZip} onChange={this.handleInputChange} />

                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="time" className="input">Amount Of Time That You Can Commit</label>
                                    <select className="form-control" id="time" value={this.state.profiles.time} onChange={this.handleInputChange}>
                                        <option >Choose...</option>
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
                                            <label id="interests" className="input"> Top 3 Interests</label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="form-group">
                                            <select className="form-control" id="interests1" value={this.state.profiles.interests1} onChange={this.handleInputChange}>
                                                <option >Choose...</option>
                                                <option>Cooking & Baking</option>
                                                <option>Community Cleanups</option>
                                                <option>Teaching & Training</option>
                                                <option>Gardening & Landscaping</option>
                                                <option>Events & Advertising</option>
                                                <option>Environment & Wildlife</option>
                                                <option>Mental Health & Fitness</option>
                                                <option>Harvest & Farming</option>
                                                <option>Home Improvement & DIY</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="form-group">
                                            <select className="form-control" id="interests2" value={this.state.profiles.interests2} onChange={this.handleInputChange}>
                                                <option >Choose...</option>
                                                <option>Cooking & Baking</option>
                                                <option>Community Cleanups</option>
                                                <option>Teaching & Training</option>
                                                <option>Gardening & Landscaping</option>
                                                <option>Events & Advertising</option>
                                                <option>Environment & Wildlife</option>
                                                <option>Mental Health & Fitness</option>
                                                <option>Harvest & Farming</option>
                                                <option>Home Improvement & DIY</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="form-group">
                                            <select className="form-control" id="interests3" value={this.state.profiles.interests3} onChange={this.handleInputChange}>
                                                <option >Choose...</option>
                                                <option>Cooking & Baking</option>
                                                <option>Community Cleanups</option>
                                                <option>Teaching & Training</option>
                                                <option>Gardening & Landscaping</option>
                                                <option>Events & Advertising</option>
                                                <option>Environment & Wildlife</option>
                                                <option>Mental Health & Fitness</option>
                                                <option>Harvest & Farming</option>
                                                <option>Home Improvement & DIY</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div>
                                            <label id="skills" className="input">Top 3 Skills (What Do You Bring To The Table?</label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="form-group">
                                            <select className="form-control" id="skills1" value={this.state.profiles.skills1} onChange={this.handleInputChange}>
                                                <option >Choose...</option>
                                                <option>Administration</option>
                                                <option>Event Planning</option>
                                                <option>Finance & Bookkeeping</option>
                                                <option>Heavy Lifting</option>
                                                <option>Computer Software</option>
                                                <option>Teaching & Childcare</option>
                                                <option>Transportation & Driving</option>
                                                <option>Writing & Editing</option>
                                                <option>Guest Speaking</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="form-group">
                                            <select className="form-control" id="skills2" value={this.state.profiles.skills2} onChange={this.handleInputChange}>
                                                <option>Choose...</option>
                                                <option>Administration</option>
                                                <option>Event Planning</option>
                                                <option>Finance & Bookkeeping</option>
                                                <option>Heavy Lifting</option>
                                                <option>Computer Software</option>
                                                <option>Teaching & Childcare</option>
                                                <option>Transportation & Driving</option>
                                                <option>Writing & Editing</option>
                                                <option>Guest Speaking</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="form-group">
                                            <select className="form-control" id="skills3" value={this.state.profiles.skills3} onChange={this.handleInputChange}>
                                                <option selected>Choose...</option>
                                                <option>Administration</option>
                                                <option>Event Planning</option>
                                                <option>Finance & Bookkeeping</option>
                                                <option>Heavy Lifting</option>
                                                <option>Computer Software</option>
                                                <option>Teaching & Childcare</option>
                                                <option>Transportation & Driving</option>
                                                <option>Writing & Editing</option>
                                                <option>Guest Speaking</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col></Col>
                                    <Col><img id="submit" src="./images/submit.png" onClick={this.profileSubmit} /></Col>
                                </Row>
                                {/* </Col> */}
                            </form>
                        </Col>
                    </Row >
                    <br /><br />
                    <Row>
                        <Col></Col>
                    </Row>
                    <br /> <br /> <br /> <br />
                </Container >
            </div >
        )


    }
}

export default ProfilePage;
