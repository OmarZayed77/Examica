import React from 'react';
import './AboutUs.css';
import AboutUsTeam from './AboutUsTeam';
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUs-Ourvision">
        <div className="AboutUs-headLine">Our Vision</div>
        <div className="AboutUs-Content">
          <p className="content">
            We hope to make exams' building and managing better and smarter
          in order to make the life of the examiners as well as the examinees
  </p>
        </div>

      </div>
      <div className="AboutUs-Section">

        <div className="AboutUs-headLine">AboutUs</div>

        <div className="AboutUs-Content container">
          <p className="content">

            this is a website dedicated to build many different types of exams
            with the easiest way possible with all types of questions and it
            gives you full control over the management of the website from
            starting your account, allowing you to  assign roles to other
            people so as to manage the account with you, building your
            exams ending with getting the results
  </p>
        </div>
      </div>

      <div className="AboutUs-headLine">Our Team</div>

       <div className="AboutUs-img container">
        <AboutUsTeam name={"Dina"} imageUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoNzeu-hym_Aa077lHA0YMAkwGgayU7XsXlI3S8nHLexrTwr0`} title={"Developer"} />
        <AboutUsTeam name={"Aya"} imageUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoNzeu-hym_Aa077lHA0YMAkwGgayU7XsXlI3S8nHLexrTwr0`} title={"Developer"} />
        <AboutUsTeam name={"Omar"} imageUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoNzeu-hym_Aa077lHA0YMAkwGgayU7XsXlI3S8nHLexrTwr0`} title={"Developer"} />
        <AboutUsTeam name={"Fatma"} imageUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoNzeu-hym_Aa077lHA0YMAkwGgayU7XsXlI3S8nHLexrTwr0`} title={"Developer"} />
        <AboutUsTeam name={"Hasnaa"} imageUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoNzeu-hym_Aa077lHA0YMAkwGgayU7XsXlI3S8nHLexrTwr0`} title={"Developer"} />
        <AboutUsTeam name={"Sarah"} imageUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoNzeu-hym_Aa077lHA0YMAkwGgayU7XsXlI3S8nHLexrTwr0`} title={"Developer"} />
       </div>




    </div>




  )
};

export default AboutUs;
