import React from 'react'
import "./Services.css";
import {BiCheck} from "react-icons/bi"

const Services = () => {
  const UIUX = [
    {
      para:"Documented test plans, testing procedures or test results."
    },
    {
      para:"Making design which useful for Conducting software."
    },
    {
      para:"Creating information architecture & user flows."
    },
    {
      para:"Creating wireframes which will help to understand functionality of software."
    },
    
  ]

  const webDevelopment = [
    {
      para:"Learned new skills, testing techniques and troubleshooting best practices."
    },
    {
      para:"Successfully created HTML templates, JavaScript files and CSS for UI"
    },
    {
      para:"I have analytical,Responsive web design skills,"
    },
    {
      para:"JavaScript skills & React Js skills helps to add functionality."
    },
    {
      para:"Performed Web site tests accorded to planned schedules, and after any Web site and product revision."
    }, 
    {
      para:"like to Problem solving and debugging."
    },
    
  ]

  const WordPress = [
    {
      para:"Developing a website which fullfills clients requirements"
    },
    {
      para:"Developing optimizable websites can be load easily"
    },
    {
      para:"Renewed domain name registrations"
    },
    {
      para:"Collaborated with management and users to develop e-commerce strategies"
    }
  ]
  return (
    <section id='services'>
     <h5>What I Offer</h5>
     <h2>Services</h2>
      
      <div className="container services__container">
        <article className="service">
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

        <ul className='service__list'>
          {UIUX.map((data,id)=>(
           <li key={id}>
             <BiCheck className='service__list-icon'/>
            <p>{data.para}</p>
          </li>  
          ))}
        </ul>
        </article>

        <article className="service">
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
 
          <ul className='service__list'>
           {webDevelopment.map((data,id)=>(
            <li key={id}>
              <BiCheck className='service__list-icon'/>
             <p>{data.para}</p>
           </li>  
           ))}
         </ul>
        </article>
       
        <article className="service">
          <div className='service__head'>
            <h3>.NET Web Development</h3>
          </div>
 
          <ul className='service__list'>
           {WordPress.map((data,id)=>(
            <li key={id}>
              <BiCheck className='service__list-icon'/>
             <p>{data.para}</p>
           </li>  
           ))}
         </ul>
        </article>

      </div>
    </section>
  )
}

export default Services