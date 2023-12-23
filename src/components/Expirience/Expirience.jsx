import React from 'react'
import './Expirience.css';
import {BsPatchCheckFill} from "react-icons/bs"

const Expirience = () => {
  const FrontEnd = [
    {
      name :"HTML",
      exp:"Intermediate"
    },
    {
      name :"CSS",
      exp:"Intermediate"
    },
    {
      name :"React.JS",
      exp:"Begineer"
    },
    {
      name :"Tailwind CSS",
      exp:"Intermediate"
    },
    {
      name :"JavaScript",
      exp:"Beginner"
    },
    {
      name :"Redux",
      exp:"Beginner"
    }
  ]

  const Design = [
    {
      name :"ASP .NET",
      exp:"Experienced"
    },
    {
      name :"ADO .NET",
      exp:"Experienced"
    },
    {
      name :"MS-Server",
      exp:"Experienced"
    },
    {
      name :"C#",
      exp:"Beginner"
    },
    {
      name :"JQuery",
      exp:"Beginner"
    },
    {
      name :"Ajax",
      exp:"Beginner"
    }
  ]
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {FrontEnd.map((data,id) => (
               <article className="experienece__details" key={id}>
               <BsPatchCheckFill className="experienece__details-icons"/>
               <div>
               <h4>{data?.name}</h4>
                <small className='text-light'>{data?.exp}</small>
               </div>
             </article>
            ))}
          </div>
        </div>
 

        <div className="experience__designing">
        <h3>Experience In .Net </h3>
          <div className="experience__content">
          {Design.map((data,id) => (
          <article className="experienece__details" key={id}>
              <BsPatchCheckFill className="experienece__details-icons"/>
              <div>
                 <h4>{data?.name}</h4>
                 <small className='text-light'>{data.exp}</small>
              </div>
          </article>
          ))}
           

          
          </div>

        </div>
      </div>
  
    </section>
  )
}

export default Expirience