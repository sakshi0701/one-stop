import React from 'react'
import './services.css'
import FeatureImg from './Images/features.svg'
import ChatsImg from './Images/chatsImage.svg'
import ReminderImg from './Images/reminder.svg'

const Services = () => {
    return (
        <>
            <div className="container">
                <h2>Services.</h2>
                <div className="card">
                    <div className="imgBox">
                        <img src={ChatsImg} alt="img"/>
                    </div>
                    <div className="contentBox">
                        <h3>Service</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi placeat cum quod necessitatibus alias maxime corrupti accusantium a qui quaerat!</p>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBox">
                    <img src={FeatureImg} alt="img"/>
                    </div>
                    <div className="contentBox">
                        <h3>Service</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi placeat cum quod necessitatibus alias maxime corrupti accusantium a qui quaerat!</p>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBox">
                    <img src={ReminderImg} alt="img"/>
                    </div>
                    <div className="contentBox">
                        <h3>Service</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi placeat cum quod necessitatibus alias maxime corrupti accusantium a qui quaerat!</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services
