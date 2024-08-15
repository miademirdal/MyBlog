import React from 'react'
import Resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download>Download Resume</a>
        <a href="#contact">Let's Connect</a>
    </div>
  )
}

export default CTA
