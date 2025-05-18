import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/Logo.png'
import nav_logo1 from '../../assets/learnify_logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'



const Navbar = () => {

    const navigate = useLocation().pathname
    console.log(navigate);
    
  return (
    <>
        <header>
            <nav className='container'>
                <div className='nav__logo'>
                    <Link to={'/'}>
                        <img className='nav__logo__img' src={nav_logo} alt="" />
                    </Link>
                </div>
                    {
                        navigate === "/" ?
                        <ul className="nav__lists">
                            <li className="nav__item"><a href="#home" className="nav__link">Bas bet</a></li>
                            <li className="nav__item"><a href="#feature" className="nav__link">Ózgeshelikler</a></li>
                            <li className="nav__item"><a href="#works" className="nav__link">Ol qalay isleydi?</a></li>
                            <li className="nav__item"><Link to={'/about'} className="nav__link">Bizler haqqında</Link></li>
                        </ul> :
                            <ul className="nav__lists">
                            <li className="nav__item"><Link to={'/'}><a href="#" className="nav__link">Bas bet</a></Link></li>
                            <li className="nav__item"><Link to={"/"}><a href="#" className="nav__link">Ózgeshelikler</a></Link></li>
                            <li className="nav__item"><Link to={'/'}><a href="#" className="nav__link">Ol qalay isleydi?</a></Link></li>
                            <li className="nav__item"><Link to={'/about'} className="nav__link">Bizler haqqında</Link></li>
                        </ul>
                    }
            </nav>
        </header>   
    </>
  )
}

export default Navbar