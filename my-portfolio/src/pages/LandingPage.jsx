import React, { useRef, useEffect, useState } from 'react';
import '../css/LandingPage.css';
import { initializeScroll } from '../javascript/sunMovement';
import { useSticky } from '../javascript/useSticky';
import Slideshow from '../components/Slideshow';

const LandingPage = () => {
  
  const [copySuccess, setCopySuccess] = useState('');

  const email = "dillonpregular@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(
      () => setCopySuccess('Copied!'),
      () => setCopySuccess('Failed to copy!')
    );
  };

  const { ref: navRef, isSticky } = useSticky();

  useEffect(() => {
    const cleanup = initializeScroll();
    return cleanup;
  }, []);

  const sectionRef = useRef([]);

  const scrollToSection = (index) => {
    const offset = 100;
    const section = sectionRef.current[index];

    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: sectionTop - offset,
            behavior: 'smooth',
        });
    }
  };

  return (
    <div className="landing-page">
      {/* Forest Background */}
      <div className="background-forest">
        <div className="sun" id="sun"></div>
        <div className="background-tree"></div>
        <div className="background-tree2"></div>
        <div className="background-tree4"></div>
        <div className="background-tree3"></div>
        <div className="background-tree6"></div> 
        <div className="background-tree5"></div>
      </div>

      {/* Foreground Content */}
      <div className="landingMainBox">
        <div className="invisLetterBox">
          Welcome, my name is...
        </div>

        <div className="leftRightBox">
          <div className="leftNamePlate">
            <div className="underlineText">Dillon Regular</div> 
            <h3>Software Developer, 
            Electrician.</h3>
          </div>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky-wrapper">
          <div ref={navRef} className={`navHoldBox ${isSticky ? 'sticky' : ''}`}>
          <button className="navBox" onClick={() => scrollToSection(0)}>About</button>
          <button className="navBox" onClick={() => scrollToSection(1)}>Projects</button>
          <button className="navBox" onClick={() => scrollToSection(2)}>Timeline</button>
          <button className="navBox" onClick={() => scrollToSection(3)}>Contact</button>
          </div>
        </div>

        <div className="aboutTextBox">
          <div className="aboutCenterBox">
            <div ref={(el) => (sectionRef.current[0] = el)} className="aboutTitle">About Me!</div>
            <div className="aboutCarryBox">
            <Slideshow/> <div className="rightTextAbout"><p>I’m Dillon Regular, a passionate software developer with a knack for innovation and problem-solving. My diverse background includes years as an electrician, honing precision and adaptability. Outside of work, I’m a mixed martial artist, balancing discipline and resilience, and an artsy soul who loves creative expression. I bring energy, creativity, and a hands-on approach to everything I do.</p>
            <p>In my Software development prowess, I've learned multiple languages through my education with Keyin College. I've learned frontend languages, like HTML, CSS, JavaScript, React. I've learned SQL & database languages, such as PostgreSQL, MySQL, & MongoDB. I also have great experience with backend functions through Java. </p></div>
            </div>
          </div>
          </div>
          <div className="projectInvisBox">
            <div ref={(el) => (sectionRef.current[1] = el)} className="projectTitle">Projects!</div>
            <div className="projectDisplayBox">
              <div className="projectPicBox1"></div>
              <div className="projectDescriptionBox">
                <div className="projectTitles">Venue Snap!</div>
                <div className="projectDescription">Venue Snap is a admin database system for adding, deleting, and changing information on venues around the world<br/>
                Using AWS for hosting, & using Docker, MongoDB, and IntelliJ for Java, we created the entirety of the backend! For the front end, we used React. <br/>
                I used Axios in order to connect the backend to the frontend!</div>
                </div>
              </div>
            <div className="projectDisplayBox">
              <div className="projectPicBox2"></div>
              <div className="projectDescriptionBox">
                <div className="projectTitles">Virtual Vault</div>
                <div className="projectDescription">Virtual Vault is a database system used for a Virtual Game market. A simple website where people can sign up for new games! <br/>
                This used PostgreSQL and React in short. A very simple and clean website!</div>
                </div>
              </div>
          </div>
          <div className="timelineHoldBox">
            <div ref={(el) => (sectionRef.current[2] = el)} className="timelineTitle">Timeline!</div>
            <div className="timelineTextBox">
              <div className="timelineTextTitle">2020-2023, Residential/Commerical Electrician.</div>
              <div className="timelineTextDesc">In my three years as an electrician, I started as a residential electrician, to a commercial electrician. I've worked on many different styles of house, from modern to heritage protected. In my commercial setting, I worked on multiple styles of compactors & scrap yards. <br/>
              While employed, I was praised for being, efficiant, intuitive, & always a joyful light.</div>
            </div>
            <div className="timelineTextBox">
              <div className="timelineTextTitle">2023-2024, Keyin College, Software Development.</div>
              <div className="timelineTextDesc">I went to Keyin for the hightened, & quick Software Developer program. This program was designed to be consistant work, as if in the field. <br/>
              While there, I was taught backend to frontend coding, several different languages, while also learning databasing, & AWS services. I believe Keyin has prepped me for the field. </div>
            </div>
            <div className="timelineTextBox">
              <div className="timelineTextTitle">2024-present, CFS, Tutoring, Software Personal Projects.</div>
              <div className="timelineTextDesc">Currently, I am working in IT at Computers for Schools. A establishment designed to taking recycled tech, & refurbishing them to go out to schools & non-profit Organizations. <br/>
              While at this job, due to the nature of the work, I am able to also focus on personal projects with coding. Allowing me to make things with passion, like this website. <br/>
              In spare time during the evenings, I volunteer my hand to those in the same program that I was in. Short tutoring sessions often allows some of peers to understand the content more.</div>
            </div>
          </div>
          <div className="contactMainBox">
            <div ref={(el) => (sectionRef.current[3] = el)} className="contactTitleBox">Contact Me!</div>
            <div className="contactContentBox">
              <div className="contactLeftText"><h3>Here are some of my links & contact info!</h3> 
                <br/> <a href="https://github.com/VapidSoup" target='_blank' rel='noreferrer'>Github</a>
                <br/> <a href="https://www.linkedin.com/in/dillon-regular-5a68aa283/" target="_blank" rel="noreferrer">Linkin</a>
                <br/> <p>
        If you'd like to hear from me, or like to hear about what I'm currently working on, you can reach me at{' '}
        <span 
          className="underlinedText" 
          onClick={handleCopy} 
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          title="Click to copy email"
        >
          {email}
        </span>
      </p>
      {copySuccess && <p style={{ color: 'green' }}>{copySuccess}</p>}
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default LandingPage;
