import React, { useState } from 'react';
import EventForm from './EventForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Event = ({ events, completeEvent, removeEvent, updateEvent }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateEvent(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <EventForm edit={edit} onSubmit={submitUpdate} />;
  }

  return events.map((event, index) => (
    <div
      className={event.isComplete ? 'event-row complete' : 'event-row'}
      key={index}
    >
      <div key={event.id} onClick={() => completeEvent(event.id)}>
        {event.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeEvent(event.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: event.id, value: event.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Event;