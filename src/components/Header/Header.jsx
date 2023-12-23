import React from 'react';
import CTA from './CTA';
import "./Header.css";
import Ajit1 from "../../assests/ajit1.png"
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
   <header>
     <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Ajit Molawade</h1>
       <h5 className="text-light">Frontend Developer 😎</h5>
       <h5 className="text-light otherInfo">I like to build amazing UI/UX experiences for humans👩🏼‍🏫📱.</h5>
      {/* I have currently completed BTEch in cse */}

          <CTA/>
          <HeaderSocial/>

       <div className="me">
         <img src={Ajit1} alt="" />
       </div>
       
       <a href='#contact' className='scroll__down'>Scroll Down</a>
     </div>
   </header>
  )
}

export default Header