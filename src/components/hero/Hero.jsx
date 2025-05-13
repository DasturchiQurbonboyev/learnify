import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'
import hero1 from '../../assets/hero1.png'

const Hero = () => {
  return (
    <>
        <section id='home'>
            <div className="container">
                <div className="hero">
                    <div className="hero__left">
                        <h1 className='hero__left__title'>Ómirlik úyreniwshilerdi qollap-quwatlaw</h1>
                        <p className='hero__left__subtitle'>Learnify járdeminde onlayn oqıw jolıńızdı qadaǵalań, tastıyıqlań hám jetilistiriń</p>
                        <div className="hero__left__btn">
                            <button>Házir baslaw</button>
                        </div>
                    </div>
                    <div className="hero__right">
                        <img src={hero1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero