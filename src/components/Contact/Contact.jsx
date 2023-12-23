import './Contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import React, { useRef } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k9hprg5', 'template_uw0kl9q', form.current, '7ugMB6VMHjBuK33Je')
     
    e.target.reset();
  };

  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>
       <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>  
            <h4>Email</h4>
            <h5>molawadeajit4426@gamil.com</h5>
            <a href="mailto:molawadeajit4426@gamil.com" target="_blank">Send a Mail</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>  
            <h4>WhatsApp</h4>
            <h5>+919665289668</h5>
            <a href="https://wa.link/nunuhk" target="_blank">Send a Message</a>
          </article>

        </div>
        {/* End of options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your Full Name' required />
          <input type="email" placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
       </div>

    </section>
  )
}

export default Contact