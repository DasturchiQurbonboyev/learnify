import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header>
            <nav className='container'>
                <div className='nav__logo'>
                    <Link to={'/'}>
                        <img className='nav__logo__img' src={nav_logo} alt="" />
                    </Link>
                </div>
                <ul className="nav__lists">
                    <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#feature" className="nav__link">Features</a></li>
                    <li className="nav__item"><a href="#works" className="nav__link">How it works</a></li>
                    <li className="nav__item"><Link to={'/about'} className="nav__link">about</Link></li>
                    <li className="nav__item"><a href="#" className="nav__link">privacy&policy</a></li>
                </ul>
            </nav>
        </header>   
    </>
  )
}

export default Navbar