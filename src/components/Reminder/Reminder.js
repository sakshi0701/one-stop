import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import EventList from './EventList';
import './calendar.css';

const Reminder = () => {
    return (
        <>
            <Sidebar />
            <div className="center">
                <div className="reminder-app">
                    <EventList />
                </div>
            </div>
        </>
    )
}

export default Reminder;