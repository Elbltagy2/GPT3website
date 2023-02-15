import React from 'react'
import './footer.css';
import image from '../../assets/assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt_footer'>
      <div className='gpt_heading'>
          <h1 className='gradient__text'>
          Do you want to step in to the future before others
          </h1>
          <button>Request Early Access</button>
      </div>
      <div className='gpt_footer_end'>
      <div className='gpt_footer_logo'>
        <img src={image}/>
        <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
        </p>
      </div>
      <div className='gpt_footer_links'>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className='gpt_footer_links'>
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className='gpt_footer_links'>
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
        
      </div>
      

      </div>
      <div className='gpt_footer_copyright'>
      <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer