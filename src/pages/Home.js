import React, {Fragment} from 'react'
import './Home.scss'
import Back from '../images/back.jpg'
import Levin from '../images/levin.jpg'
import {useTranslation} from 'react-i18next'

function Home() {
    const {t} = useTranslation()
    return (
      <Fragment>
        <img src= {Back} className="pic" alt="pic"/> 
        <div className='Block'>
          <h2><u>{t("home.architect_of_day")}</u></h2>
        </div> 
        <div className='Achitecture_of_day'>
          <div className= 'title_of_day'>
            <h3>{t("levin.name")}</h3>
            <p>1936-2014</p>
            <div className='title_information'>
              <p>{t("levin.description_1")}<br/>
              {t("levin.description_2")}<br/>
              {t("levin.description_3")}<br/>
              {t("levin.description_4")}<br/>
              {t("levin.description_5")}<br/>
              {t("levin.description_6")}</p>
              <a href="react-app/Levin" class="link-primary">{t("home.read_more")}</a>
            </div>
          </div>
          <div className='pic_of_day'>
            <img src={Levin} className="levin" alt="levin"/>
          </div>
        </div>
      </Fragment>

    )
}

export default Home