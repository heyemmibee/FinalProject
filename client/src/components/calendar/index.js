import React from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import { Tooltip } from "react-bootstrap";
import { findDOMNode } from 'react-dom'
import ReactTooltip from 'react-tooltip'
// import interactionPlugin from '@fullcalendar/interaction';
// import timeGridPlugin from '@fullcalendar/timegrid'

require("../../../node_modules/@fullcalendar/core/main.css");
require("../../../node_modules/@fullcalendar/daygrid/main.css");

class CalendarApp extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: [],
    // tooltipOpen: false,
    // title: '',
    // description: '',
    // toggle: ''
  };

  toggle = this.state.toggle

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    axios.get("/events/").then(response => {
      console.log("Inside Calendar Component : Get events response: ");
      console.log(response.data);

      if (response.data) {
        let newEvents = [];
        for (let ii = 0; ii < response.data.length; ii++) {
          let newEvent = {
            title: response.data[ii].title,
            start: response.data[ii].start,
            description: response.data[ii].description,
            location: response.data[ii].location
          };
          newEvents.push(newEvent);
        }

        console.log("Setting events to : " + newEvents);
        this.setState({ calendarEvents: newEvents });
      }
    });
  }

  myEventMouseEnter(event) {
    console.log(event);
    console.log(event.event._def.title);
    console.log(event.event._def.extendedProps.description);
    let event_str = "Title : " + event.event._def.title + "\n" + "Description : " + event.event._def.extendedProps.description + "\n" + "Location : " + event.event._def.extendedProps.location;
    alert(event_str);
  }


  // toggle(event) {
  //   this.setState({
  //     tooltoolOpen: !this.tooltipOpen,
  //     title : event.event._.title,
  //     event: event.event._def.extendedProps.description
  //   })
  // }

  render() {

    return (
      <div className="card text-center">
        <div className="card-header" />
        <div className="card-body calendar-card-body">
          <FullCalendar
            defaultView="dayGridMonth"
            firstday="1"
            locale="en"
            header={{
              left: "title",
              center: "Schedule of Events",
              right: "today prev,next"
            }}
            plugins={[dayGridPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            eventMouseEnter={this.myEventMouseEnter}
            eventColor={"#378006"}

          />

          {/* <p ref='foo' data-tip='tooltip'></p>
          <button onClick={() => { ReactTooltip.show(findDOMNode(this.refs.foo)) }}></button>
          <ReactTooltip /> */}

        </div>
      </div>
    );
  }
}
export default CalendarApp;