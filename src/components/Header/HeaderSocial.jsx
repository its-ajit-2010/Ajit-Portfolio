import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href='https://www.linkedin.com/in/ajit-molawade-a33853247/' target="_blank" rel="noreferrer"> <BsLinkedin/></a>
      <a href='https://github.com/its-ajit-2010' target="_blank" rel="noreferrer"><FaGithub/></a>
      <a href='https://dribbble.com/ajit20' target="_blank" rel="noreferrer"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial