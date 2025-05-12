import React from 'react'
import './Users.css'

const Users = () => {
  return (
    <>
        <section id="users">
            <div className="container">
                <div className="users">
                    <h2 className='users__title'>What Our Users Say</h2> 
                    <div className="users__cards">
                        <div className="users__item">
                            <p className="users__item__description">Learnify.ai has transformed the way I learn online. The assessments ensure I really understand the material.</p>
                            <h3 className='users__item__title'>SAM</h3>
                            <h2 className="users__item__name">S</h2>
                        </div>
                        <div className="users__item">
                            <p className="users__item__description">Learnify.ai has transformed the way I learn online. The assessments ensure I really understand the material.</p>
                            <h3 className='users__item__title'>SAM</h3>
                            <h2 className="users__item__name">S</h2>
                        </div>
                        <div className="users__item">
                            <p className="users__item__description">Learnify.ai has transformed the way I learn online. The assessments ensure I really understand the material.</p>
                            <h3 className='users__item__title'>SAM</h3>
                            <h2 className="users__item__name">S</h2>
                        </div>
                    </div>   
                </div>
            </div>    
        </section>   
    </>
  )
}

export default Users