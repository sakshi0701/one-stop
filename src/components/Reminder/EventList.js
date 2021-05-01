import React, { useState } from 'react';
import EventForm from './EventForm';
import Event from './Event';

function EventList() {
  const [events, setEvents] = useState([]);

  const addEvent = event => {
    if (!event.text || /^\s*$/.test(event.text)) {
      return;
    }

    const newEvents = [event, ...events];

    setEvents(newEvents);
  };

  const updateEvent = (eventId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setEvents(prev => prev.map(item => (item.id === eventId ? newValue : item)));
  };

  const removeEvent = id => {
    const removedArr = [...events].filter(event => event.id !== id);

    setEvents(removedArr);
  };

  const completeEvent = id => {
    let updatedEvents = events.map(event => {
      if (event.id === id) {
        event.isComplete = !event.isComplete;
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  return (
    <>
      <h1 className="reminder-title m-3">Reminders</h1>
      <EventForm onSubmit={addEvent} />
      <Event
        events={events}
        completeEvent={completeEvent}
        removeEvent={removeEvent}
        updateEvent={updateEvent}
      />
    </>
  );
}

export default EventList;