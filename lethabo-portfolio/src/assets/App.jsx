import React from "react";
import ReactDOM from "react-dom";
import * as Mui from '@mui/material';
import { animated, useSpring } from '@react-spring/web'


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

export default function App () {
    return (
        <section>
            <header>
            <nav className="nav-bar">
                <h4>Lethabo Mathabatha</h4>
                <h4>DEVELOPER, UX/UI DESIGNER</h4>
                <h4>{menuButtons}</h4>
                
            </nav>

            <div className= "work-availability">
                <div className= "work-availability-button">
                    <WorkAvailability />
                </div>
                {/* <Mui.TextField id="outlined-basic" label="Get In Touch" variant="outlined" />
                <Mui.Button type="submit" variant="contained" size="small">Save</Mui.Button>
                <Mui.Alert severity="info">Message cannot be empty</Mui.Alert> */}
            </div>

            <div className="hero-text">
                <p>I am passionate about transforming concepts into real life working solutions.
                <Mui.Button variant="contained" color="primary">
                    Get In Touch
                </Mui.Button>
                </p>
                
                <h1>Designer & Developer</h1>
                
            </div>
            </header>

            <div className="projects-section">
                <h1>Selected Projects</h1>
                <div className="slide-one">
                    <div className="project-number">
                        <img src="images/number-one.png" />
                    </div>
        
                    <h5>HTML, CSS, JavaScript, Netlify</h5>
                    <img src="images/eunoia-project.jpg" alt="Eunoia Cinic Project" />
                    <h2>The Eunoia Clinic</h2>
                </div>
            </div>

            
        </section>
        
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