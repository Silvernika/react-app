import React, {Fragment} from 'react';
import Nika from "../images/Nika.jpg"
import Kris from "../images/Kris.jpg"
import Yana from "../images/Yana.png"
import './Footer.scss'
import {useTranslation} from "react-i18next";

function Footer() {
   const {t} = useTranslation();
    return (
        <Fragment>
         <div className="Footer">
           <div class="container text-center text-md-start">
             <div class="row">
               <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                 <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>{t('footer.about_project')}
                 </h6>
                 <p>
                 {t("footer.project_description_1")}<br/> {t("footer.project_description_2")}
                 </p>
                 </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"> 
                 <h6 class="text-uppercase fw-bold mb-4">
                     {t('footer.about_developers')}
                  </h6>
                  <div className='Developer'>
                   <p>
                      <a href="https://github.com/Silvernika" class="text-reset">{t("footer.nika")}</a>
                   </p>
                   <img src={Nika} className="Avatar" alt="Avatar"/>
                   </div>
                   <div className='Developer'>
                   <p>
                      <a href="https://github.com/Krist1e" class="text-reset">{t("footer.kristina")}</a>
                   </p>
                   <img src={Kris} className="Avatar" alt="Avatar"/>
                   </div>
                   <div className='Developer'>
                   <p>
                      <a href="https://github.com/YanaOnuchina" class="text-reset">{t("footer.yana")}</a>
                   </p>
                   <img src={Yana}className="Avatar" alt="Avatar"/>
                   </div>
    
              </div>
            </div>
           </div>
         </div>
        </Fragment>

    )
}

export default Footer