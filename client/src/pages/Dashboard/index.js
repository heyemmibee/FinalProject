// import "./Dashboard.css";
// import Container from "../../components/container";
// import Row from "../../components/row"
// import Col from "../../components/Col"
// import { Container, Row, Col } from "react-bootstrap"

import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './main.scss' // webpack must be configured to do this
export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
    )
  }
}

