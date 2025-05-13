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
              <li className="footer__item"><a href="#" className="footer__link">Bas bet</a></li>
              <li className="footer__item"><a href="feature" className="footer__link">Ózgeshelikler</a></li>
              <li className="footer__item"><a href="works" className="footer__link">Ol qalay isleydi?</a></li>
              <li className="footer__item"><a href="about" className="footer__link">Bizler haqqında</a></li>
            </ul>
            <div className="footer__socials">
              <a className='footer__icons__link' href="https://www.facebook.com/share/19Yx78MipV/"><img src={facebook} alt="" /></a>
              <a className='footer__icons__link' href="https://www.linkedin.com/company/learnifyofficial/"><img src={linkedin} alt="" /></a>
              <a className='footer__icons__link' href="https://www.instagram.com/learnify_academy?igsh=MXg2dWd1YmlvOThpbA=="><img src={instagram} alt="" /></a>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer