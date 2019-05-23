import React from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from '@fullcalendar/interaction';
// import timeGridPlugin from '@fullcalendar/timegrid'

require("../../../node_modules/@fullcalendar/core/main.css");
require("../../../node_modules/@fullcalendar/daygrid/main.css");

class CalendarApp extends React.Component {
  calendarComponentRef = React.createRef();
  state = {
    calendarWeekends: true,
    calendarEvents: []
  };

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
            start: new Date(),
            description: response.data[ii].description
          };
          newEvents.push(newEvent);
        }

        console.log("Setting events to : " + newEvents);
        this.setState({ calendarEvents: newEvents });
      }
    });
  }

  myEventMouseEnter(event) {
    console.log(event.event._def.title);
    console.log(event.event._def.extendedProps.description);
  }

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
            // buttonText={{
            //   today: "today",
            //   month: "month",
            //   week: "week",
            //   day: "day",
            //   list: "list"
            // }}
            plugins={[dayGridPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            eventMouseEnter={this.myEventMouseEnter}//{{
              // event: this.newEvent,
              // el: "insert HTML",
              // jsEvent: MouseEvent,
              // view: view,
          //}}
          //eventMouseLeave={{}}
            // dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }
}
export default CalendarApp;

// eventMouseout: function(calEvent, jsEvent) {
//    $(this).css('z-index', 8);
//    $('.tooltipevent').remove();
// },
