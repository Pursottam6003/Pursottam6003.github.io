import React from 'react'
import welcome from "../images/welcome.svg"
import Namaste from '../images/namaste.webp'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import FullImage from '../images/hero/pursottam.jpg'
import Profile from '../images/hero/pursottam_sah.jpeg'
import about from '../images/hero/icons/about.svg'
import homeIcon from '../images/hero/icons/home.svg'
import blogIcon from '../images/blogs/blogIcon.svg'
import contactIcon from '../images/hero/icons/contact.svg'
import experienceIcon from '../images/hero/icons/experience.svg'
import projectIcon from '../images/hero/icons/projects.svg'

export const Hero = () => {
  return (
    <>
    <div className="container" id="home">
     <div>
         <div className="image">
             <img src={Profile} alt="img" id="profile" />
         </div>

          <div className="description">
          <h2 className="name">Pursottam Sah</h2>

        <a href="https://www.github.com/Pursottam6003" aria-label="github" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24"
                transform="translate(9,0)" >
                <path
                    d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z">

                  </path>
              </svg>
          </a>
          <a href="https://www.linkedin.com/in/pursottam-sah-78aa4a1bb/" aria-label="linkedin" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" id="" x="0px" y="0px" width="25" height="25" viewBox="0 0 45 45"
                  transform="translate(16,0)" style={{ fill: "var(--varln)" }}>
                  <path
                      d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z">
                  </path>
              </svg>
          </a>

         <a href="https://www.facebook.com/profile.php?id=100034293845796" aria-label="fb" rel="noopener noreferrer" target="_blank">

              <img src={Facebook} width="25px" height="25px" alt="fb" id="facebook" />
            </a>            <a href="https://www.instagram.com/rahulsah6003/" aria-label="insta" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} width="25px" height="25px" alt="insta" id="insta" />

        </a>
        {/* <p className="designation">I am <span id="p1" >{whatIAm}</span></p> */}
        <div className="Polyheadings">
                
          <div className="wrapper">
              <div className="static-txt"> I am</div>
                  <ul className="dynamic-txts">
                      <li><span>Youtuber</span></li>
                      <li><span>Designer</span></li>
                      <li><span>Freelancer</span></li>
                      <li><span>Programmer</span></li> 
                  </ul>
              </div>
          </div>
      </div>
      </div>

        <div>
            <img src={welcome} alt="welcome" className="weclome" id="welcome" />
        </div>

       <div className="NamasteImg">
           <img src={Namaste} alt="namaste" id="namaste" />
       </div>

        </div>

       <ul className="navigationbar">
           <li className="navigation_hover"><a href="#home" aria-label="home">Home</a></li>
           <li className="navigation_hover"><a href="#about" aria-label="about">About</a></li>
           <li className="navigation_hover"><a href="#myprojects" aria-label="projects">Projects</a></li>
           <li className="navigation_hover"><a href="#myexperience">Experience</a></li>
           <li className="navigation_hover"><a href="#blog">Blogs</a></li>
           <li className="navigation_hover"><a href="#contact">Contact us</a></li>
       </ul>
       
        <ul className="mobilenav">
            <li id="HomeNav">               <a href="#home">

            <img src={homeIcon} width={25}></img>
           </a>
       </li>
    

        <li>
            <a href="#about">
                <img src={about}  width={25}></img>
            </a>
        </li>      <li>
             <a href="#myprojects">
                 <img src={projectIcon}
                     alt="myproject" />
             </a>
         </li>

        <li>
             <a href="#myexperience">
                  <img src={experienceIcon} alt='experience'></img>
             </a>
         </li>
         <li>
             <a href="#blog">
                <img src={blogIcon} alt="blog"   width={25}></img>
             </a>
         </li>

        <li>
            <a href="#contact">
                <img src={contactIcon} width={25} alt="contact" />
            </a>
        </li>   </ul>
        <div className="IntroSection">
            <p className="first">HI THERE 👋</p>
            <h2 className="name">I'AM <span id="myname">PURSOTTAM SAH</span></h2>
            <div className="detailsinfo">
                <p><strong>I am a</strong> B Tech final-Year <strong>Computer Science UG Student</strong> from <strong><a 
                    href="http://nitap.ac.in/" target="_blank" rel="noopener noreferrer">NIT Arunachal Pradesh</a></strong>  and a <strong>Full Stack Web Developer</strong> with a passion for <strong>UI/UX Design</strong> and <strong>Open Source</strong>.
                </p>
                <p>
                    I am a <strong>self-taught</strong> programmer who enjoys learning new things and solving problems. I am a <strong>quick learner</strong> who is always eager to learn new technologies and frameworks. I am a <strong>team player</strong> who enjoys working with others to solve problems and build new things.
                </p>

                <div className='buttons'>
                    <a href="#myprojects"><button id="mycv">My Projects</button></a>
                    <a href="#about" className="scrollDown"></a>
                    <a href={'https://drive.google.com/file/d/1azNpifF8w9lEFreDsvKu1d3CFehYo2-_/view'} target="_blank" rel="noopener noreferrer">
                        <button id="resume">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    
    <div className="About" id="about">
      <img src={about} alt="about" />
      <h2 className="HowerMe">About Me</h2>

    <div className="imageAbout reveal">
        <img src={FullImage} width="270px" height="auto" id="imageAbout" alt="About Pursottam " />
    </div>
    <article className="reveal">
        <p>
            Hello! My name is <strong>Pursottam Sah</strong> and I am from <strong>Assam, India.</strong>I am a
            Computer Science Undergraduate student at <strong>NIT Arunachal Pradesh, </strong>graduating in 2024.
        </p>
        <p>
            I am a <strong>self-taught</strong> programmer who enjoys learning new things and solving problems. I am a <strong>quick learner</strong> who is always eager to learn new technologies and frameworks. I am a <strong>team player</strong> who enjoys working with others to solve problems and build new things.
        </p>
     
        <p>I had an incredible experience of open source development thourgh Google Summer of Code 2023 and Girlscript Summer of Code 2023 I got the exposure how to work in a team and how to build a project collaboratively i have even exposure of software development while working on indian oil as a software developer engineer intern </p>
                
       </article>
       <br />
   </div>


   <br />
   <br />
    </>
  )
}

