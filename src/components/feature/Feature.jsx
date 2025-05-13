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
                <h2 className='feature__title'>Ne ushın Learnify-dı tańlaymız?</h2>
                <div className="feature__cards">
                    <div className="feature__item">
                        <img src={feature_1} alt="" />
                        <h3 className='feature__item__title'>Jámi úyreniw barısın baqlaw</h3>
                        <p className='feature__item__description'>Blog, video, podkast hám basqalar arqalı úyreniw barısıńızdı qadaǵalań</p>
                    </div>
                    <div className="feature__item">
                        <img src={feature_2} alt="" />
                        <h3 className='feature__item__title'>Jasalma intellekt járdeminde jekelestirilgen</h3>
                        <p className='feature__item__description'>Qızıǵıwshılıǵıńız hám tarawıńızǵa ılayıqlastırılǵan jeke oqıw tájiriybeleri</p>
                    </div>
                    <div className="feature__item">
                        <img src={feature_3} alt="" />
                        <h3 className='feature__item__title'>Tastıyıqlanǵan bahalaw</h3>
                        <p className='feature__item__description'>Jasalma intellekt járdeminde dúzilgen bahalawlar arqalı bilimlerdiń ózlestiriliwine kóz jetkeriwge boladı</p>
                    </div>
                    <div className="feature__item">
                        <img src={feature_4} alt="" />
                        <h3 className='feature__item__title'>Tolıq analitikalıq basqarıw paneli</h3>
                        <p className='feature__item__description'>Biziń janlı panelimiz arqalı oqıw jolıńız haqqında tereń maǵlıwmatlarǵa iye bolıń</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature