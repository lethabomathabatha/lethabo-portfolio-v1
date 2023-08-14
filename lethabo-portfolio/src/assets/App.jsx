// import React from "react";
// import ReactDOM from "react-dom";
// import * as Mui from '@mui/material';
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
            <nav>
                <img src="./public/lethabo-logo-o-bg.png" width="90px" alt="Lethabo Logo" />

               
                <div className="nav--menu-items">
                    <a href="#about" style={{ textDecoration: "none" , color:"inherit"}} >About </a>
                    -
                    <a href="#projects" style={{ textDecoration: "none" , color:"inherit"}}> work </a>
                    - 
                    <a href="#contact" style={{ textDecoration: "none" , color:"inherit"}}> Contact </a>
                    - 
                    <a href="https://github.com/lethabomathabatha" style={{ textDecoration: "none" , color:"inherit"}}> Github</a>
                </div>
            </nav>


            <header>
              <div className="section--hero">
                <h1 className="hero--text-title">Designer & Developer</h1>
                <img src="./public/background.jpg" className="section--hero-image"></img>
                <div className="work-availability">
                  <WorkAvailability />
                </div>
              </div>
            </header>

            <div className="about--section" id="about">
              <h1 className="about--section-title">Designer & Developer</h1>
              
              <div className="about--section-text">
                  <span className="about--section-name">
                    <span className="about--section-name1">Lethabo</span>
                    {/* <span className="about--section-name2">Mathabatha</span> */}
                    <img src="./public/arrow.png" alt="arrow" className="about--section-arrow"/>
                  </span>

                <span className="about--section-paragraph">I’m an architectural technologist turned <strong>software developer</strong> from South Africa. You could say transforming concepts into beautiful, scalable, real-life working solutions is my thing. (And this is only beginning.) 
                <br /> <br /> 
                Let’s create something great together.
                <br /> <br />

                <div className="about--section-buttons">
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
                      fontSize: "2rem",
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
                    
                  <Button 
                    className="about--section-contact"
                    variant="contained"
                    
                    href="#skills"
                    size="large"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      textTransform: "none",
                      size: "large",
                      fontSize: "2rem",
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
                  skills
                  </Button>
                </div>

                </span>

              </div>
            </div>

            <div className="projects--section" id="projects">
              <span className="projects--section-header">Selected Projects</span>

                  <div className="project--slide">
                    <div className="project-number">
                        <img src="./public/number-one.png" />
                    </div>
        
                    <h5>HTML, CSS, JavaScript, React</h5>

                    <div className='image-container'>
                      <img src="./public/pods-image.png" alt="Pods App Image" />
                      <div className='projects--section-overlay'>
                        <h2>Pods</h2>
                        <span className="projects--section-paragraph">Pods is a mock podcast platform that allows you to browse and play podcasts from an api.</span>
                      
                        <Button variant="" 
                          className="projects--section-button"
                          onClick={() => window.open("https://podsapp.netlify.app")}
                          sx={{
                            color: "white",
                            border: "2px solid white",
                            backgroundColor: "var(--light-purple)",
                          }}
                        >Visit</Button>
                      </div>
                      
                    </div>
                </div>



              <div className="project--slide">
                    <div className="project-number">
                        <img src="./public/number-two.png" />
                    </div>
                    
                    <h5>HTML, CSS, TypeScript, React</h5>
                    
                    <div className='image-container'>
                      <img src="./public/spoonfed-image.png" alt="SpoonFed Project" style={{backgroundColor:"var(--charcoal)"}}/>
                      {/* <h3>SpoonFed</h3> */}
                      <div className='projects--section-overlay'>
                        <h2>SpoonFed</h2>
                        <span className="projects--section-paragraph">SpoonFeed is a platform that gives you recipes based on the ingredients you have. 
                          <br/> <br/> Spoonfed utilizes Edamam's API to search for recipes and specific meals, and it features built-in food type filters for quick finds.</span>

                        <Button variant="" 
                          className="projects--section-button"
                          sx={{
                            color: "white",
                            border: "2px solid white",
                            backgroundColor: "var(--charcoal)",
                          }}
                        >Coming 18/09/23</Button>
                      </div>
                     
                    
                    <br/>
                  </div>
                </div>

                

                <div className="project--slide">
                    <div className="project-number">
                        <img src="./public/number-three.png" />
                    </div>
        
                    <h5>HTML, CSS, JavaScript, React</h5>

                    <div className='image-container'>
                      <img src="./public/property-manager-image.png" alt="Aluve Property Manager Project" />

                      <div className='projects--section-overlay'>
                        <h2>Aluve App Property Manager</h2>
                        <span className="projects--section-paragraph">Aluve App is a platform that helps property owners & managers run their properties.
                          <br />Aluve App features lease, maintenance, and rent management for both property manager & tenant.
                        </span>

                        <Button variant="" 
                          className="projects--section-button"
                        
                          sx={{
                            color: "white",
                            border: "2px solid white",
                            backgroundColor: "var(--light-purple)",
                          }}
                        >Coming Sep 2023</Button>
                      </div>
                    </div>
                </div>
            </div>

            <div className="skills--section" id='skills'>
              <div className="skills--section-header-wrapper">
                <span className="skills--section-header">Here is What I Use. </span>
                <span className="skills--section-header">Here is What I Use. </span>
                <span className="skills--section-header">Here is What I Use. </span>
              </div>
              
              <div className="skills--section-container">
                <div className="icon-container">
                  <img src="./icon _css3_.png" alt="CSS Icon"  className="skills--section-icon"/>
                  <span>CSS</span>
                </div>

                <div className="icon-container">
                  <img src="./icon _html5_.png" alt="HTML Icon" width={"40px"} className="skills--section-icon"/>
                  <span>HTML</span>
                </div>

                <div className="icon-container">
                  <img src="./icon _javascript_.png" alt="JavaScript Icon" width={"40px"} className="skills--section-icon"/>
                  <span>JavaScript</span>
                </div>
                
                <div className="icon-container">
                  <img src="./icon _typescript_.png" alt="TypeScript Icon" width={"40px"} className="skills--section-icon"/>
                  <span>TypeScript</span>
                </div>

                <div className="icon-container">
                  <img src="./icon _react_.png" alt="React Icon" width={"40px"} className="skills--section-icon"/>
                  <span>React</span>
                </div>

                <div className="icon-container">
                  <img src="./icon _vue dot js_.png" alt="Vue Icon" width={"40px"} className="skills--section-icon"/>
                  <span>Vue</span>
                </div>
                
                <div className="icon-container">
                  <img src="./icon _figma_.png" alt="Figma Icon" width={"30px"} className="skills--section-icon"/>
                  <span>Figma</span>
                </div>

                <div className="icon-container">
                  <img src="./icon _github_.png" alt="Github Icon" width={"40px"} className="skills--section-icon"/>
                  <span>Github</span>
                </div>
              </div>
              
              <div className="contact--section" id="contact">
                <span className="contact--section-header">Contact</span>

              
                <div className="contact--section-buttons">
                <Button 
                  className="contact--section-contact"
                  variant="contained"
                    
                  size="large"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    textTransform: "none",
                    size: "large",
                    fontSize: "2rem",
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: "800",
                    border: "1px solid black",
                    borderRadius: "3rem",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    }
                  }}
                  onClick={() => {
                    window.open(`mailto:lethabomathabatha.m@gmail.com`, "_blank");
                  }}
                >
                email
                </Button>

                <Button 
                  className="contact--section-github"
                  variant="contained"
                  onClick={() => {
                    window.open("https://github.com/lethabomathabatha");
                  }}
                  
                  size="large"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    textTransform: "none",
                    size: "large",
                    fontSize: "2rem",
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
                github
                </Button>

                <Button 
                  className="contact--section-linkedin"
                  variant="contained"
                  onClick={() => {
                      window.open("https://www.linkedin.com/in/lethabo-mathabatha-455a8b18a/", "_blank");
                  }}
                  
                  size="large"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    textTransform: "none",
                    size: "large",
                    fontSize: "2rem",
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
                linkedin
                </Button>
                </div>

                <div className="contact--section-logo-wrapper">
                  <img src="./public/lethabo-logo-o-bg.png" alt="Lethabo Logo" className="contact--section-logo"/>

                  <span className="contact--section-paragraph">As a new developer, I am always open to opportunities 
                    to learn from and to share my skills where I can - get in touch!
                  </span>

                </div>
              </div>
            </div>

          <footer>
            <p>designed & developed by lethabo mathabatha | 2023</p>
          </footer>
        </div>
        
    );
}



