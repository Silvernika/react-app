import React, {Fragment} from 'react';
import "./People.scss"
import Zaborsky from "../images/Zaborsky.jpeg"
import Voinov from "../images/Voinov.jpg"
import Phomin from "../images/Phomin.png"
import Ananich from "../images/Ananich.jpg"
import Grigorev from "../images/Grigorev.jpg"
import Levin from "../images/levin.jpg"
import {useTranslation} from "react-i18next";

function People() { 
  const {t} = useTranslation();
    return (
        <Fragment>
            <div className='People_page'>
            <h1 class="display-4 text-center">{t("people.title")}</h1>
             <div className='Person'>
                <div className='Name'>
                  <h3>{t("zaborsky.name")}</h3>
                  <p>1909-1999</p>
                <div className='information'>
                 <p>{t("zaborsky.description_1")}<br/>
                 {t("zaborsky.description_2")}<br/>
                 {t("zaborsky.description_3")}</p>
                 <a href="/Zaborsky" class="link-primary">{t("people.read_more")}</a>
                </div>
               </div>
               <div className='picture'>
                <img src={Zaborsky} className="photo" alt="ph"/>
               </div>  
             </div>
             <div className='Person'>
                <div className='Name'>
                  <h3>{t("voinov.name")}</h3>
                  <p>1902-1987</p>
                <div className='information'>
                <p>{t("voinov.description_1")}<br/>
                        {t("voinov.description_2")}<br/>
                        {t("voinov.description_3")}</p>
                 <a href="/Voinov" class="link-primary">{t("people.read_more")}</a>
                </div>
               </div>
               <div className='picture'>
                <img src={Voinov} className="photo" alt="ph"/>
               </div>  
             </div>
             <div className='Person'>
                <div className='Name'>
                  <h3>{t("phomin.name")}</h3>
                  <p>1904-1989</p>
                <div className='information'>
                 <p>{t("phomin.description_1")}<br/>
                 {t("phomin.description_2")}<br/>
                 {t("phomin.description_3")}<br/>
                 {t("phomin.description_4")}</p>
                 <a href="/Phomin" class="link-primary">{t("people.read_more")}</a>
                </div>
               </div>
               <div className='picture'>
                <img src={Phomin} className="photo_3" alt="ph"/>
               </div>  
             </div>
             <div className='Person'>
                <div className='Name'>
                  <h3>{t("ananich.name")}</h3>
                  <p>1955-2015</p>
                <div className='information'>
                 <p>{t("ananich.description_1")}<br/>
                 {t("ananich.description_2")}<br/>
                 {t("ananich.description_3")}<br/>
                 {t("ananich.description_4")}</p>
                 <a href="/Ananich" class="link-primary">{t("people.read_more")}</a>
                </div>
               </div>
               <div className='picture'>
                <img src={Ananich} className="photo_4" alt="ph"/>
               </div>  
             </div>
             <div className='Person'>
                <div className='Name'>
                  <h3>{t("grigorev.name")}</h3>
                  <p>1932-2019</p>
                <div className='information'>
                 <p>{t("grigorev.description_1")}<br/>
                 {t("grigorev.description_2")}<br/>
                 {t("grigorev.description_3")}<br/>
                 {t("grigorev.description_4")}</p>
                 <a href="/Grigorev" class="link-primary">{t("people.read_more")}</a>
                </div>
               </div>
               <div className='picture'>
                <img src={Grigorev} className="photo_4" alt="ph"/>
               </div>  
             </div>
             <div className='Person'>
              <div className='Name'>
                <h3>{t("levin.name")}</h3>
                <p>1936-2014</p>
               <div className='title_information'>
                <p>{t("levin.description_1")}<br/>
                {t("levin.description_2")}
                {t("levin.description_3")}<br/>
                {t("levin.description_4")}<br/>
                {t("levin.description_5")}<br/>
                {t("levin.description_6")}</p>
                 <a href="/Levin" class="link-primary">{t("people.read_more")}</a>
                </div>
               </div>
              <div className='picture'>
               <img src={Levin} className="photo" alt="ph"/>
               </div>  
             </div> 
           </div>
        </Fragment>

    )
}

export default People;