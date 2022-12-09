import React, {Component, Fragment} from 'react';
import './Person.scss'
import PhominImg from '../images/Phomin.png'
import GouvernementHouse from '../images/GouvernementHouse.jpg'
import Hospital from '../images/Botkin_Infectious_Diseases_Hospital.jpg'
import ArtMuseum from '../images/ArtMuseum.jpg'
import Council from '../images/Moskovsky_District_Council.jpg'
import Monument from '../images/PhominMonument.jpg'
import Subway from '../images/MetroVosstaniya.jpg'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { YMaps, Map, Placemark } from "react-yandex-maps"
import YouTube from 'react-youtube';


class MediaPlayerComponent extends Component {
    render() {
        const opts = {
        playerVars: {
        autoplay: 1,
        },
    };

    return <YouTube videoId="T9tRcKo13O4" opts={opts} width='100%' height='100%' onReady={this._onReady} />;
    }

    _onReady(event) {
    event.target.pauseVideo();
    }
}
export const Phomin = () => {
    return (
        <Fragment>
            <div className='person_page'>
                <div className='main_info'>
                    <div className= 'text_info'>
                        <h2>Фомин Игорь Иванович</h2>
                        <p>1904-1989</p>
                        <div className='main_text'>
                            <p>Советский архитектор, педагог. Член Союза архитекторов СССР (1933).<br/>
                            Член-корреспондент Академии архитектуры СССР (1941–1955), член Академии<br/>
                            строительства и архитектуры СССР (1951–1963). Народный архитектор СССР (1971).<br/>
                            Член-корреспондент АХ (1979). Автор Дома Правительства БССР</p>
                        </div>
                    </div>
                    <div className='person_picture'>
                        <img src={PhominImg} className="phomin" alt="phomin"/>
                    </div>
                </div>
                <div>    
                    <Timeline lineColor={'#ddd'}>
                        <TimelineItem
                        key="001"
                        dateText=" 20/01/1904"
                        style={{ color: '#e86971' }}>
                            <h5>Родился в Москве</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="002"
                        dateText="1920 - 1921"
                        style={{ color: '#e86971' }}>
                            <h5>Учился на математическом факультете Ленинградского университета</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="003"
                        dateText="1924"
                        style={{ color: '#e86971' }}>
                            <h5>Зачислен на 3-й курс архитектурного факультета</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="004"
                        dateText="1934 - 1950"
                        style={{ color: '#e86971' }}>
                            <h5>Преподавал в Ленинградском институте инженеров коммунального строительства</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="005"
                        dateText="1946 - 1948"
                        style={{ color: '#e86971' }}>
                            <h5>Совместно со своим учеником Б.Н. Журавлёвым построил заново здание дома Лопатина по Невскому проспекту № 68</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="006"
                        dateText="1951 - 1968"
                        style={{ color: '#e86971' }}>
                            <h5>Был заместителем главного архитектора Ленинграда</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="007"
                        dateText="16/06/1989"
                        style={{ color: '#e86971' }}>
                            <h5>Умер в Ленинграде. Похоронен на Волковском православном кладбище</h5>
                        </TimelineItem>
                    </Timeline>
                </div>
                <h4>Наиболее значимые работы</h4>
                <div className='image_galery'>
                        <img src={GouvernementHouse} className="galery_photo" alt=""/>
                        <img src={Hospital} className="galery_photo" alt=""/>
                        <img src={ArtMuseum} className="galery_photo" alt=""/>
                        <img src={Council} className="galery_photo" alt=""/>
                        <img src={Monument} className="galery_photo" alt=""/>
                        <img src={Subway} className="galery_photo" alt=""/>
                </div>
                <div className='video-player'>
                    <MediaPlayerComponent/>
                </div>
                <div className="maps">
                    <YMaps query={{mode: 'release'}}>
                        <h4>Работы Фомина И.И. на карте</h4>
                        <Map
                        width="60vw"
                        height="50vh" 
                        defaultState={{center : [59.5521, 30.2231], zoom: 6}}
                        >
                            <Placemark geometry={[59.5521, 30.2231]}/>
                            <Placemark geometry={[59.5307, 30.1907]}/>
                            <Placemark geometry={[59.5553, 30.2138]}/>
                            <Placemark geometry={[55.4355, 37.3029]}/>
                            <Placemark geometry={[53.5346, 27.3241]}/>
                            <Placemark geometry={[50.1740, 28.5312]}/>
                        </Map>  
                    </YMaps> 
                </div>     
            </div>
        </Fragment>

    )
}