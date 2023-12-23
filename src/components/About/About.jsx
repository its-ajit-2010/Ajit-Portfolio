import React from 'react';
import './About.css';
import Ajit from "../../assests/ajit.png";
import {FaAward} from "react-icons/fa";
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">

      <div className="about__me">
       <div className="about__me__image">
        <img src={Ajit} alt="" />
       </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon'/>
            <h5>Expirience</h5>
            <small>1+ Years Working</small>
           </article>
         
           <article className="about__card">
             <FiUsers className='about__icon'/>
             <h5>Projects</h5>
             <small>7+ Worldwide</small>
           </article>

          <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
            <h5>Clients</h5>
            <small>7+ Completed</small>
          </article>
         </div>
      <p>
      Innovative individual with proven success evaluating requirements for software development projects to design innovative solutions. Out-of-the box thinker and problem solver dedicated to improving performance. Works
      well in teams and consistently delivers to deadlines.
      </p>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    
    </div>
    </section>
  )
}

export default About