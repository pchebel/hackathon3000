/* eslint-disable no-restricted-globals */
import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';
import { createEventId } from '../../helper/event-utils';

const Calendar = ({ openAppointment }) => {
  const calendarRef = useRef();
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  // useEffect(() => {
  //   let calendarApi = calendarRef.current.getApi();
  //   calendarApi.weekNumberCalculation('ISO');
  // }, []);

  const handleEventClick = ({ event }) => {
    if (confirm(`Are you sure you want to delete the event '${event.title}`)) {
      event.remove();
    }
  };

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  return (
    <div className="calendar-container" style={{}}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={weekendsVisible}
        initialEvents={[]}
        select={handleDateSelect}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        eventsSet={handleEvents}
      />
    </div>
  );
};

export default Calendar;

const renderEventContent = (eventInfo) => {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <br />
      <i>{eventInfo.event.title}</i>
    </>
  );
};
