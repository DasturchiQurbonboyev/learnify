import React from 'react'
import './Users.css'

const Users = () => {
  return (
    <>
        <section id="users">
            <div className="container">
                <div className="users">
                    <h2 className='users__title'>Paydalanıwshılarımızdıń pikirleri</h2> 
                    <div className="users__cards">
                        <div className="users__item">
                            <p className="users__item__description">Learnify meniń onlayn oqıw usılımdı pútkilley ózgertti. Bahalawlar arqalı materialdı haqıyqattan túsingenimdi anıqlap alamán.</p>
                            <h3 className='users__item__title'>Noila</h3>
                            <h2 className="users__item__name">N</h2>
                        </div>
                        <div className="users__item">
                            <p className="users__item__description">Bugingi kúnde zamanaǵa say platformalardıń biri – Learnify. Onıń arqalı oqıwshı tek bilim almay, sońı túsinip, qollanıp úyrenedi.</p>
                            <h3 className='users__item__title'>Diyora</h3>
                            <h2 className="users__item__name">D</h2>
                        </div>
                        <div className="users__item">
                            <p className="users__item__description"> Learnify oqıw jarayónın sade, tiyimli hám kúńilli etedi. Bul platforma bilim hám tártibdi birdey úyretedi.</p>
                            <h3 className='users__item__title'>Nigora</h3>
                            <h2 className="users__item__name">N</h2>
                        </div>
                    </div>   
                </div>
            </div>    
        </section>   
    </>
  )
}

export default Users