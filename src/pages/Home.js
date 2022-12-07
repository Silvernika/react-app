import React, {Fragment} from 'react'
import './Home.scss'
import Back from '../images/back.jpg'
import Levin from '../images/levin.jpg'

export const Home = () => {
    return (
      <Fragment>
        <img src= {Back} className="pic" alt="pic"/> 
        <div className='Block'>
          <h2><u>Деятель Дня:</u></h2>
        </div> 
        <div className='Achitecture_of_day'>
          <div className= 'title_of_day'>
            <h3>Левин Леонид Менделеевич</h3>
            <p>1936-2014</p>
            <div className='title_information'>
              <p>Заслуженный архитектор Республики Беларусь, Лауреат Ленинской премии<br/>
              и премии Ленинского комсомола, Лауреат премии Волгоградского Комсомола,
              дважды лауреат Государственной премии Республики Беларусь, лауреат многих престижных конкурсов<br/>
              и смотров архитектурных работ, Академик Международной и Белорусской Академий архитектуры,<br/>
              Председатель Союза белорусских еврейских общественных объединений и общин с 1991 года.<br/>
              Один из авторов мемориального комплекса «Хатынь»,<br/>
              за который (в составе авторского коллектива) был удостоен Ленинской премии.</p>
              <a href="/Levin" class="link-primary">Читать полностью</a>
            </div>
          </div>
          <div className='pic_of_day'>
            <img src={Levin} className="levin" alt="levin"/>
          </div>
        </div>
      </Fragment>

    )
}