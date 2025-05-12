import React from 'react'
import './Footer.css'
import facebook from '../../assets/footer/facebook.png'
import xcom from '../../assets/footer/xcom.png'
import linkedin from '../../assets/footer/linkedin.png'
import instagram from '../../assets/footer/instagram.png'

const Footer = () => {
  return (
    <>
      <footer id='footer'>
        <div className="container">
          <div className="footer">
            <ul className="footer__lists">
              <li className="footer__item"><a href="#" className="footer__link">Home</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Features</a></li>
              <li className="footer__item"><a href="#" className="footer__link">How it works</a></li>
              <li className="footer__item"><a href="#" className="footer__link">about</a></li>
              <li className="footer__item"><a href="#" className="footer__link">privacy&policy</a></li>
            </ul>
            <div className="footer__socials">
              <a className='footer__icons__link' href="#"><img src={facebook} alt="" /></a>
              <a className='footer__icons__link' href="#"><img src={xcom} alt="" /></a>
              <a className='footer__icons__link' href="#"><img src={linkedin} alt="" /></a>
              <a className='footer__icons__link' href="#"><img src={instagram} alt="" /></a>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer