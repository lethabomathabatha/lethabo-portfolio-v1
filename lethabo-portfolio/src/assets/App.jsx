import React from "react";
import ReactDOM from "react-dom";
import * as Mui from '@mui/material';


function WorkAvailability() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'short' });
    const currentDay = currentDate.getDate();
  
    return (
        <>
        {`${currentMonth} ${currentDay}, Open To Work`}
      </>
    );
  }

export default function App () {
    return (
        <section>
            <header>
            <nav className="nav-bar">
                <h4>Lethabo Mathabatha</h4>
                <h4>UX/UI DESIGNER, DEVELOPER</h4>
                
            </nav>

            <div className= "work-availability">
                <Mui.Button variant="contained" color="primary">
                    <WorkAvailability />
                </Mui.Button>
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

const buttons = [
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
          {buttons}
        </Mui.ButtonGroup>
      </Mui.Box>
    );
  }