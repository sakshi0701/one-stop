import React from 'react';
import Icon from './page-not-found.svg';
import './default.css'

const Default = () => {
    return (
        <>
        <div className="center default">
            <div className="default-heading">
            Page Not Found!
            </div>
            <div className="default-icon">
                <img src={Icon} />
            </div>
        </div>
        </>
    )
}

export default Default;
