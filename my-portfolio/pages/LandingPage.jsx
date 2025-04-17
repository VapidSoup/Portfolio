import { initializeScroll } from '@/javascript/sunMovement';
import { useSticky } from '@/javascript/useSticky';
import Slideshow from '@/components/Slideshow';
import React, { useState, useEffect, useRef } from "react";

const LandingPage = () => {
  
  const [copySuccess, setCopySuccess] = useState('');
  const [copyCount, setCopyCount] = useState(0);
  const email = "dillonpregular@gmail.com";
  const sectionRef = useRef([]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    .then(() => {
      setCopySuccess("Email copied successfully!");
      setCopyCount(prev => prev + 1);
      setTimeout(() => setCopySuccess(""), 2000);
    })
    .catch(err => console.error("Failed to copy", err));
  };

  const { ref: navRef, isSticky } = useSticky();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cleanup = initializeScroll();
      return cleanup;
    }
  }, []);

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
            <h3>Software Developer, Electrician.</h3>
          </div>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky-wrapper">
          <div ref={navRef} className={`navHoldBox ${isSticky ? 'sticky' : ''}`}>
            {["About", "Projects", "Timeline", "Contact"].map((name, index) => (
              <button key={name} className="navBox" onClick={() => scrollToSection(index)}>
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* About Me Section */}
        <div className="aboutTextBox">
          <div className="aboutCenterBox">
            <div ref={(el) => (sectionRef.current[0] = el)} className="aboutTitle">About Me!</div>
            <div className="aboutCarryBox">
              <Slideshow />
              <div className="rightTextAbout">
                <p>I’m Dillon Regular, a passionate software developer with a knack for innovation and problem-solving. My diverse background includes years as an electrician, honing precision and adaptability. Outside of work, I’m a mixed martial artist, balancing discipline and resilience, and an artsy soul who loves creative expression. I bring energy, creativity, and a hands-on approach to everything I do.</p>
                <p>In my Software development prowess, I've learned multiple languages through my education with Keyin College. I've learned frontend languages, like HTML, CSS, JavaScript, React. I've learned SQL & database languages, such as PostgreSQL, MySQL, & MongoDB. I also have great experience with backend functions through Java.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="projectInvisBox">
          <div ref={(el) => (sectionRef.current[1] = el)} className="projectTitle">Projects!</div>
          <div className="projectDisplayBox">
            <div className="projectPicBox1"></div>
            <div className="projectDescriptionBox">
              <div className="projectTitles">
                <a href="https://github.com/infuriated-mink/semester4-venuesnap-frontend" target="_blank" rel="noreferrer">Venue Snap!</a>
              </div>
              <div className="projectDescription">Venue Snap is an admin database system for adding, deleting, and changing information on venues around the world. Using AWS for hosting, Docker, MongoDB, and IntelliJ for Java, we created the entirety of the backend! For the frontend, we used React. I used Axios to connect the backend to the frontend!</div>
            </div>
          </div>
          <div className="projectDisplayBox">
            <div className="projectPicBox2"></div>
            <div className="projectDescriptionBox">
              <div className="projectTitles">
                <a href="https://github.com/infuriated-mink/semester3-finalsprint" target="_blank" rel="noreferrer">Virtual Vault!</a>
              </div>
              <div className="projectDescription">Virtual Vault is a database system used for a virtual game market. A simple website where people can sign up for new games! This used PostgreSQL and React. A very simple and clean website!</div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timelineHoldBox">
          <div ref={(el) => (sectionRef.current[2] = el)} className="timelineTitle">Timeline!</div>
          <div className="timelineTextBox">
            <div className="timelineTextTitle">2020-2023, Residential/Commercial Electrician.</div>
            <div className="timelineTextDesc">In my three years as an electrician, I started as a residential electrician and moved to commercial work. I've worked on various styles of houses, from modern to heritage-protected. In my commercial setting, I worked on compactors and scrap yards. I was praised for being efficient, intuitive, and always a joyful light.</div>
          </div>
          <div className="timelineTextBox">
            <div className="timelineTextTitle">2023-2024, Keyin College, Software Development.</div>
            <div className="timelineTextDesc">I attended Keyin for a fast-paced Software Developer program. It provided consistent work, similar to the field, where I learned backend and frontend coding, several languages, databases, and AWS services. I believe Keyin has prepped me for the field.</div>
          </div>
          <div className="timelineTextBox">
            <div className="timelineTextTitle">2024-present, CFS, Tutoring, Software Personal Projects.</div>
            <div className="timelineTextDesc">Currently, I am working in IT at Computers for Schools, refurbishing tech for schools and non-profits. This job allows me to focus on personal coding projects like this website. I also volunteer tutoring peers in the program I was in, offering short tutoring sessions.</div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contactMainBox">
          <div ref={(el) => (sectionRef.current[3] = el)} className="contactTitleBox">Contact Me!</div>
          <div className="contactContentBox">
            <div className="contactLeftText">
              <h3>Here are some of my links & contact info!</h3>
              <br /> 
              <a href="https://github.com/VapidSoup" target='_blank' rel='noreferrer'>Github <div className="linkPic"></div></a>
              <br /> 
              <a href="https://www.linkedin.com/in/dillon-regular-5a68aa283/" target="_blank" rel="noreferrer">LinkedIn <div className="linkPic"></div></a>
              <br /> 
              <p>If you'd like to hear from me, or like to hear about what I'm currently working on, you can reach me at{' '}
                <span 
                  className="underlinedText" 
                  onClick={handleCopy} 
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                  title="Click to copy email"
                >
                  {email}<div className="clipboardPic"></div>
                </span>
              </p>
              {copySuccess && <p style={{ color: 'green' }}>{copySuccess}</p>}
            </div>
            <p>Copied {copyCount} times</p>
            <div className="funDesignPic"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
