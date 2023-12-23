import React from 'react'
import "./Footer.css";
// import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import ajit from "../../assests/Alogo.png"

const Footer = () => {
  return (
    <footer>
        <div className="footer__socials">
          <a href="https://github.com/its-ajit-2010"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/ajit-molawade-a33853247/"><FaLinkedinIn/></a>
          {/* <a href="https://www.instagram.com/er_yk_102/"><FaInstagram/></a> */}
        </div>

        <div className="footer__copyright">
          <small>  &copy; Er_AM. All rights reserved.</small>
        </div>
        <div className='footerLogo'>
           <a href="#">
          <img src={ajit} alt="" className='logo' />
          </a>
        </div>

      
    
    </footer>
  )
}

export default Footer