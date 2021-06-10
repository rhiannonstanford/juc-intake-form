import React from 'react';
import '../App.css';



const Welcome = (props) => {
    const { user } = props;


    return (
        <div className="welcome-container">
            <p className="welcome-message">{`Welcome ${user} to the JUC Team!`}</p>
        </div>
    );
};

export default Welcome;