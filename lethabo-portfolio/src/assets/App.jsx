import React from "react";
import ReactDOM from "react-dom";
import * as Mui from '@mui/material';
import { animated, useSpring } from '@react-spring/web'
import Button from '@mui/material/Button';


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
                <img src="./images/lethabo-logo-o-bg.png" width="90px" alt="Lethabo Logo" />
                {/* <h4>Lethabo Mathabatha</h4> */}
                {/*<h4 className="nav--bar-text">DEVELOPER, DESIGNER</h4> */}
                <div className="nav--menu-items">
                    <a href="#about" style={{ textDecoration: "none" , color:"inherit"}} className="nav--menu-items">About </a>
                    -
                    <a href="#projects" style={{ textDecoration: "none" , color:"inherit"}}> work </a>
                    - 
                    <a href="#contact" style={{ textDecoration: "none" , color:"inherit"}}> Contact </a>
                    - 
                    <a href="#github" style={{ textDecoration: "none" , color:"inherit"}}> Github</a>
                </div>
            </nav>


            <header>
              <div className="section--hero">
                <h1 className="hero--text-title">Designer & Developer</h1>
                <img src="/images/background.jpg" className="section--hero-image"></img>
                <div className="work-availability">
                  <WorkAvailability />
                </div>
              </div>
            </header>

            <div className="about--section">
              <h1 className="about--section-title">Designer & Developer</h1>
              
              <div className="about--section-text">
                  <span className="about--section-name">
                    <span className="about--section-name1">Lethabo</span>
                    <span className="about--section-name2">Mathabatha</span>
                    <img src="./images/arrow.png" alt="arrow" className="about--section-arrow"/>
                  </span>

                <span className="about--section-paragraph">I’m an architectural technologist turned <strong>software developer</strong> from South Africa. You could say transforming concepts into beautiful, scalable, real-life working solutions is my thing. (And this is only beginning.) 
                <br /> <br /> 
                Let’s create something great together.
                <br /> <br />
                <Button 
                  className="about--section-contact"
                  variant="contained"
                  
                  href="#contact"
                  size="large"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    textTransform: "none",
                    size: "large",
                    fontSize: "2.3rem",
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: "800",
                    border: "1px solid black",
                    borderRadius: "3rem",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    }
                  }}
                >
                contact
                </Button>

                </span>
              </div>
            </div>

            <div className="projects--section">
              <span className="projects--section-header">Selected Projects</span>

              <div className="slide-one">
                    <div className="project-number">
                        <img src="images/number-one.png" />
                    </div>
        
                    <h5>HTML, CSS, TypeScript, Vue</h5>
                    <img src="images/eunoia-project.jpg" alt="SpoonFed Project" style={{backgroundColor:"var(--charcoal)"}}/>
                    <h2>SpoonFed
                    <br/>
                    {/* <span className="projects--section-paragraph">SpoonFeed is a platform that gives you recipes based on the ingredients you have.</span> */}

                    </h2>
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