import React from "react";
import ReactDOM from "react-dom";
import * as Mui from '@mui/material';
import { animated, useSpring } from '@react-spring/web'


// component
function WorkAvailability() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'short' });
    const currentDay = currentDate.getDate();
  
    return (
        <div className="work-availability--date">
        <h2>{currentMonth} {currentDay}</h2>
        <span>Open To Work</span>
      </div>
    );
  }


//main script
export default function App () {


    return (
        <div className="main--container">
            <nav className="nav-bar">
                <img src="./images/lethabo-logo.png" width="40px" alt="Lethabo Logo" />
                {/* <h4>Lethabo Mathabatha</h4> */}
                <h4>DEVELOPER, UX/UI DESIGNER</h4>
                <h4>About  Works Contact</h4>
                
            </nav>


            <header>
            <div className="section--hero">
              <h1 className="hero--text-title">Designer & Developer</h1>
              <img src="/images/background.jpg" className="section--hero-image"></img>
              <div className="work-availability">
                <WorkAvailability />
              </div>
            </div>

            {/*  */}

            <div className="hero-text">
                <p>I am passionate about transforming concepts into real life working solutions.
                <Mui.Button variant="contained" color="primary">
                    Get In Touch
                </Mui.Button>
                </p>
                                
            </div>
            </header>

            <span className="projects--title">Selected Projects</span>
            <div className="projects-section">
                <div className="slide-one">
                    <div className="project-number">
                        <img src="images/number-one.png" />
                    </div>
        
                    <h5>HTML, CSS, JavaScript, Netlify</h5>
                    <img src="images/eunoia-project.jpg" alt="Eunoia Cinic Project" />
                    <h2>The Eunoia Clinic</h2>
                </div>
            </div>

            <div className="projects-section">
                <div className="slide-one">
                    <div className="project-number">
                        <img src="images/number-one.png" />
                    </div>
        
                    <h5>HTML, CSS, JavaScript, Netlify</h5>
                    <img src="images/eunoia-project.jpg" alt="Eunoia Cinic Project" />
                    <h2>The Eunoia Clinic</h2>
                </div>
            </div>

            <div className="projects-section">
                <div className="slide-one">
                    <div className="project-number">
                        <img src="images/number-one.png" />
                    </div>
        
                    <h5>HTML, CSS, JavaScript, Netlify</h5>
                    <img src="images/eunoia-project.jpg" alt="Eunoia Cinic Project" />
                    <h2>The Eunoia Clinic</h2>
                </div>
            </div>

            
        </div>
        
    );
}

const menuButtons = [
    <Mui.Button key="one">About</Mui.Button>,
    <Mui.Button key="two">Works</Mui.Button>,
    <Mui.Button key="three">Contact</Mui.Button>,
  ];
  

export function GroupOrientation() {
    return (
      <Mui.Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }}
      >
       
        
        <Mui.ButtonGroup
          orientation="horizontal"
          aria-label="horizontal contained button group"
          variant="text"
        >
          {menuButtons}
        </Mui.ButtonGroup>
      </Mui.Box>
    );
  }