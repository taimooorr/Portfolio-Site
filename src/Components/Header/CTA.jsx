import React from 'react'
import CV from '../../assets/cv.pdf'
export default function CTA() {
  return (
    <div className="cta">
      <a className='btn' href={CV} download >Download CV</a>
      <a className='btn btn-primary' href="#contact">Contact Me</a>
    </div>
  )
}
