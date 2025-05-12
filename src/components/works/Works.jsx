import React from 'react'
import './Works.css'

const Works = () => {
  return (
    <>
        <section id='works'>
            <div className="container">
                <div className="wors">
                    <h1 className="works__title">How It Works</h1>
                    <div className="works__cards">
                        <div className="works__item">
                            <h3 className="works__item_title">1. Install the Extension</h3>
                            <p className="works__item__description">Add Learnify.ai to your Chrome browser with a single click.</p>
                        </div>
                        <div className="works__item">
                            <h3 className="works__item_title">2. Start Learning</h3>
                            <p className="works__item__description">Add Learnify.ai to your Chrome browser with a single click.</p>
                        </div>
                        <div className="works__item">
                            <h3 className="works__item_title">3. Install the Extension</h3>
                            <p className="works__item__description">Add Learnify.ai to your Chrome browser with a single click.</p>
                        </div>
                        <div className="works__item">
                            <h3 className="works__item_title">4. Install the Extension</h3>
                            <p className="works__item__description">Add Learnify.ai to your Chrome browser with a single click.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Works