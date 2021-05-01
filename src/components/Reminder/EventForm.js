import React, { useState, useEffect, useRef } from 'react';

function EventForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='event-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='event-input edit'
          />
          <button onClick={handleSubmit} className='event-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add an event!'
            value={input}
            onChange={handleChange}
            name='text'
            className='event-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='event-button'>
            Add event
          </button>
        </>
      )}
    </form>
  );
}

export default EventForm;