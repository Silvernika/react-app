import React, {Fragment} from 'react';
import Nika from "../images/Nika.jpg"
import Kris from "../images/Kris.jpg"
import Yana from "../images/Yana.png"
import './Footer.scss'
export const Footer = () => {
    return (
        <Fragment>
         <div className="Footer">
           <div class="container text-center text-md-start">
             <div class="row">
               <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                 <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>О проекте
                 </h6>
                 <p>
                 Учебный пример сайта на базе<br/> библиотеки React, посвященный белорусским архитекторам.
                 </p>
                 </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"> 
                 <h6 class="text-uppercase fw-bold mb-4">
                  О разработчиках
                  </h6>
                  <div className='Developer'>
                   <p>
                      <a href="https://github.com/Silvernika" class="text-reset">Павлюченко Ника</a>
                   </p>
                   <img src={Nika} className="Avatar" alt="Avatar"/>
                   </div>
                   <div className='Developer'>
                   <p>
                      <a href="https://github.com/Krist1e" class="text-reset">Алексеева Кристина</a>
                   </p>
                   <img src={Kris} className="Avatar" alt="Avatar"/>
                   </div>
                   <div className='Developer'>
                   <p>
                      <a href="https://github.com/YanaOnuchina" class="text-reset">Онучина Яна</a>
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