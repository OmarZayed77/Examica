import React from 'react';
import './AboutUs.css';

const AboutUsTeam = ({ name, title, imageUrl }) => {
    return (
        <div className="AboutUsTeam-imgs">
            <p className="AboutUsImg-txt">{name}</p>
            <p>{title}</p>
            <img className="AboutUs-img" alt="aboutusImage" src={imageUrl} />
        </div>

    )
}
export default AboutUsTeam;