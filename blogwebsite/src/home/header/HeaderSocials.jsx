import React from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { PiGithubLogoFill } from "react-icons/pi";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/miademirdal/" target='_blank'><TiSocialLinkedinCircular /></a>
      <a href="https://github.com/miademirdal" target='_blank'><PiGithubLogoFill /></a>
        
    </div>
  )
}

export default HeaderSocials
