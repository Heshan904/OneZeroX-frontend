import React from 'react'
import './footer.css'

import fc from '../images/facebook.png'
import tw from '../images/twitter.png'
import yt from '../images/youtube.png'
import wa from '../images/whatsapp.png'




function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <h4>OneZeroX</h4>
          <p>Innovating digital solutions since 2025.</p>
          <p>© {new Date().getFullYear()} SoftWave Inc. All rights reserved.</p>
        </div>

        <div className="footer-section links">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/careers">Project</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href='https://www.facebook.com/share/19UoitDXzs/' rel='noopener noreferrer' target='_blank'><button><img src={fc} alt="" style={{height:'50px',widows:'50px'}}/></button></a>
            <a href='https://x.com/hasitha904?t=lEneXq7dhzVTdPKIIwyu3g&s=35' rel='noopener noreferrer' target='_blank'><button><img src={tw} alt="" style={{height:'50px',widows:'50px'}}/></button></a>
            <a href='https://youtube.com/@mindrelaxation904?si=ZtEssJ2KwD9sVduH' rel='noopener noreferrer' target='_blank'><button><img src={yt} alt="" style={{height:'50px',widows:'50px'}}/></button></a>
            <a href='https://wa.me/+94702913904' rel='noopener noreferrer' target='_blank'><button><img src={wa} alt="" style={{height:'50px',widows:'50px'}}/></button></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer