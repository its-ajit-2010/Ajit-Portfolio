import React from 'react';
import etenders from "../../assests/E-Tenders.png";
import matoshree from "../../assests/Matoshree.png";
import ecommerce from "../../assests/E-Commerce.png";
import appkida from "../../assests/AppKida.png";
import portfolio from "../../assests/Portfolio.png";
import crm from "../../assests/CRM.png";
// import infra from "../../assests/infra.png";
// import esatara from "../../assests/esatara.png";
// import manmar from "../../assests/manmar.png";
import "./Portfolio.css"

const Portfolio = () => {
 const porfolio = [
  {
    id:1,
    Title:"Working on this CRM app used in Interior Industries",
    src:crm,
    git:"https://github.com/its-ajit-2010",
    demo:"",
  },
  { 
    id:2,
    Title:"Sachin E-Tenders Company Portfolio Website Using Web Technologies",
    src:etenders,
    git:"https://github.com/its-ajit-2010",
    demo:"https://www.sachinetenders.com/",
  },
  {
    id:3,
    Title:"Matoshree Interiors Company Portfolio Website Using Web Technologies",
    src:matoshree,
    git:"https://github.com/its-ajit-2010",
    demo:"https://www.matoshreeinteriors.com/",
  },
  {
    id:4,
    Title:"E-commerce website Using React Js",
    src:ecommerce,
    git:"https://github.com/its-ajit-2010",
    demo:"https://e-commerce-gilt-alpha.vercel.app/home",
   
  },
  {
    id:5,
    Title:"AppKida Company Portfolio Website Using React Js",
    src:appkida,
    git:"https://github.com/its-ajit-2010",
    demo:"https://app-kida.vercel.app/",
  }, 
  {
    id:6,
    Title:"Portfolio website Using React Js",
    src:portfolio,
    git:"https://github.com/its-ajit-2010",
    demo:"https://sjsmsatara.org/",
  }
  

 ]

  return (
    <section id='portfolio'>
      <h5>My Recentt Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {porfolio.map((data,id)=>(
        <article className='portfolio__item' key={id}>

          <div className="portfolio__item-image">
               <img src={data.src} alt="mtechZilla"  />
          </div>

          <h3>{data.Title}</h3>
           <div className="portfolio__item-cta">
             <a href={data.git} className='btn' target='_blank'>Github</a>
             <a href={data.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>

        ))}
      </div>
    </section>
  )
}

export default Portfolio