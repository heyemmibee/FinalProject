import React from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

{
  /* <link href='client/node_modules/@fullcalendar/core/main.css' rel='stylesheet'> </link>
<link href='client/node_modules/@fullcalendar/daygrid/main.css' rel='stylesheet'> </link> */
}

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

  // render() {
  //   return (
  //     <div className='app'>
  //       <div className='app-top'>
  //         <button onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp;
  //         <button onClick={ this.gotoPast }>go to a date in the past</button>&nbsp;
  //         (also, click a date/time to add an event)
  //       </div>
  //       <div className='app-calendar'>
  //         <FullCalendar
  //           defaultView="dayGridMonth"
  //           header={{
  //             left: 'prev,next today',
  //             center: 'title',
  //             right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //           }}
  //           plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
  //           ref={ this.calendarComponentRef }
  //           weekends={ this.state.calendarWeekends }
  //           events={ this.state.calendarEvents }
  //           dateClick={ this.handleDateClick }
  //           />
  //       </div>
  //     </div>
  //   )
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
            buttonText={{
              today: "today",
              month: "month",
              week: "week",
              day: "day",
              list: "list"
            }}
            plugins={[dayGridPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }
}
export default CalendarApp;

//   toggleWeekends = () => {
//     this.setState({ // update a property
//       calendarWeekends: !this.state.calendarWeekends
//     })
//   }

//   gotoPast = () => {
//     let calendarApi = this.calendarComponentRef.current.getApi()
//     calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
//   }

//   handleDateClick = (arg) => {
//     if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
//       this.setState({  // add new event data
//         calendarEvents: this.state.calendarEvents.concat({ // creates a new array
//           title: 'New Event',
//           start: arg.date,
//           allDay: arg.allDay
//         })
//       })
//     }
//   }

// }
