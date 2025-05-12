import React from 'react'
import feature_1 from '../../assets/feature/feature-1.png'
import feature_2 from '../../assets/feature/feature-2.png'
import feature_3 from '../../assets/feature/feature-3.png'
import feature_4 from '../../assets/feature/feature-4.png'
import './Feature.css'

const Feature = () => {
  return (
    <section id='feature'>
        <div className="container">
            <div className="feature">
                <h2 className='feature__title'>Why Choose Learnify.ai?</h2>
                <div className="feature__cards">
                    <div className="feature__item">
                        <img src={feature_1} alt="" />
                        <h3 className='feature__item__title'>Comprehensive Learning Tracking</h3>
                        <p className='feature__item__description'>Track your learning progress across blogs, videos, podcasts, and more.</p>
                    </div>
                    <div className="feature__item">
                        <img src={feature_2} alt="" />
                        <h3 className='feature__item__title'>AI-Powered Customization</h3>
                        <p className='feature__item__description'>Personalized learning experiences tailored to your interests and industry.</p>
                    </div>
                    <div className="feature__item">
                        <img src={feature_3} alt="" />
                        <h3 className='feature__item__title'>Verified Assessments</h3>
                        <p className='feature__item__description'>Ensure knowledge retention with AI-generated assessments.</p>
                    </div>
                    <div className="feature__item">
                        <img src={feature_4} alt="" />
                        <h3 className='feature__item__title'>Detailed Analytics Dashboard</h3>
                        <p className='feature__item__description'>Get in-depth insights into your learning journey with our live dashboard.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature