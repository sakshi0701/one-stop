import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import EventList from './EventList';
import './calendar.css';

const Reminder = () => {
    return (
        <>
            <Sidebar />
            <div className="reminder-app">
                <EventList />
            </div>
        </>
    )
}

export default Reminder;