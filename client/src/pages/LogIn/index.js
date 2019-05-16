import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import axios from 'axios'
import "./Login.css"
import { Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom"


class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
   

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
              {/*
                    <h4>Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-1 col-mr-auto"
                               
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                                 <Link to="/signup" className="btn btn-link">
                                    <span className="text-secondary">sign up</span>
				                </Link>
                                

                        </div>
                    </form>
                </div>
*/}
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
                                <h1 id="loginTitle" className="title">Login</h1>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col></Col>
                            <Col>
                                <form>
                                    <Row>
                                        <Col>
                                            <label htmlFor="username">Username</label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input id="username"
                                                type="text"
                                                id="username"
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
                                        <label className="form-label" htmlFor="password">Password: </label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <input id="password"
                                            placeholder="Password"
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />
                                        </Col>
                                   </Row>
                                   <br />

                                <img id="signup" src="./images/signup.png" />
                                <Link to="/dashboard"><img src="./images/login.png" onClick={this.handleSubmit}/></Link>

                    
                                </form>
                            </Col>
                        <Col></Col>
                        </Row>
                    </Container>
                </div >

            )
        }
    }
}

export default Login
