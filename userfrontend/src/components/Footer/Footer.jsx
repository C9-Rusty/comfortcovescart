import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footer-logo' src={assets.logo_bottom} alt="" />
          <p>At Comfort Coves we draw inspiration from the refined elegance of world-class hospitality and combine it with thoughtful craftsmanship. Whether for your own space or a gift of indulgence, ComfortCoves helps you turn routine into ritual.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><a href=""></a>Home</li>
            <li><a href=""></a>About us</li>
            <li><a href=""></a>Reviews</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91 12345 67890</li>
            <li>enquiry@comfortcoves.in</li>
          </ul>
        </div>
      </div>
      <hr className="footer-hr" />
      <p className='footer-copyright'>Copyright © 2025 ComfortCoves. All rights reserved.</p>
    </div>
  )
}

export default Footer
