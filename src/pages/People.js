import React, {Fragment} from 'react';
import "./People.scss"
import Zaborsky from "../images/Zaborsky.jpeg"
import Voinov from "../images/Voinov.jpg"
import Phomin from "../images/Phomin.png"
import Ananich from "../images/Ananich.jpg"
import Grigorev from "../images/Grigorev.jpg"
import Levin from "../images/levin.jpg"
export const People = () => {
    return (
        <Fragment>
            <div className='People_page'>
            <h1 class="display-4 text-center">Список архитекторов</h1>
             <div className='Person'>
                <div className='Name'>
                  <h3>Заборский Георгий Владимирович</h3>
                  <p>1909-1999</p>
                <div className='information'>
                 <p>Белорусский архитектор. Народный архитектор СССР (1981), заслуженный строитель Беларуси,<br/>
                 академик Российской академии архитектуры и строительных наук, лауреат Государственной премии СССР (1971).<br/>
                 Автор проекта памятника-монумента на площади Победы</p>
                 <a href="/Zaborsky" class="link-primary">Читать полностью</a>
                </div>
               </div>
               <div className='picture'>
                <img src={Zaborsky} className="photo" alt="ph"/>
               </div>  
             </div>
             <div className='Person'>
                <div className='Name'>
                  <h3>Воинов Александр Петрович</h3>
                  <p>1902-1987</p>
                <div className='information'>
                 <p>Архитектор, автор здания ЦК КПБ (Администрации Президента Республики Беларусь).<br/>
                  Член-корреспондент НАН Беларуси. Профессор. Заслуженный деятель искусств БССР, заслуженный строитель БССР.</p>
                 <a href="/Voinov" class="link-primary">Читать полностью</a>
                </div>
               </div>
               <div className='picture'>
                <img src={Voinov} className="photo" alt="ph"/>
               </div>  
             </div>
             <div className='Person'>
                <div className='Name'>
                  <h3>Фомин Игорь Иванович</h3>
                  <p>1904-1989</p>
                <div className='information'>
                 <p>Советский архитектор, педагог. Член Союза архитекторов СССР (1933).<br/>
                  Член-корреспондент Академии архитектуры СССР (1941–1955), член Академии<br/>
                  строительства и архитектуры СССР (1951–1963). Народный архитектор СССР (1971).<br/>
                  Член-корреспондент АХ (1979). Автор Дома Правительства БССР</p>
                 <a href="/Phomin" class="link-primary">Читать полностью</a>
                </div>
               </div>
               <div className='picture'>
                <img src={Phomin} className="photo_3" alt="ph"/>
               </div>  
             </div>
             <div className='Person'>
                <div className='Name'>
                  <h3>Ананич Юрий Степанович</h3>
                  <p>1955-2015</p>
                <div className='information'>
                 <p>Белорусский архитектор. Внёс вклад в формирование<br/>
                  архитектурного облика современного Минска и других белорусских городов.<br/>
                  Член Белорусского союза архитекторов. Автор Жилого комплекса посольства<br/>
                  Российской федерации в Беларуси по улице Орловской в Минске (2007)</p>
                 <a href="/Ananich" class="link-primary">Читать полностью</a>
                </div>
               </div>
               <div className='picture'>
                <img src={Ananich} className="photo_4" alt="ph"/>
               </div>  
             </div>
             <div className='Person'>
                <div className='Name'>
                  <h3>Григорьев Юрий Пантелеймонович </h3>
                  <p>1932-2019</p>
                <div className='information'>
                 <p>Заслуженный архитектор РФ (1993г.), Почётный строитель России (1998г.)<br/>
                  и г.Москвы (1999г.), Почётный архитектор России (2001г.), Заслуженный архитектор<br/>
                  Республики Беларусь (2007г.), Народный архитектор РФ (2008г.)<br/>
                  Автор Дома Литераторов.</p>
                 <a href="/Grigorev" class="link-primary">Читать полностью</a>
                </div>
               </div>
               <div className='picture'>
                <img src={Grigorev} className="photo_4" alt="ph"/>
               </div>  
             </div>
             <div className='Person'>
              <div className='Name'>
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
              <div className='picture'>
               <img src={Levin} className="photo" alt="ph"/>
               </div>  
             </div> 
           </div>
        </Fragment>

    )
}