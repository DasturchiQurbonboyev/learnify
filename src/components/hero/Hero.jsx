import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <>
        <section id='home'>
            <div className="container">
                <div className="hero">
                    <div className="hero__left">
                        <h1 className='hero__left__title'>Empowering Lifelong Learners</h1>
                        <p className='hero__left__subtitle'>Track, verify, and enhance your online learning journey with Learnify.ai</p>
                        <div className="hero__left__btn">
                            <button>Get Started Now</button>
                        </div>
                    </div>
                    <div className="hero__right">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero