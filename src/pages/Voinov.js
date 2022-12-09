import React, {Component, Fragment} from 'react';
import './Person.scss'
import VoinovImg from '../images/Voinov.jpg'
import Belarus from '../images/BelarusHostel.jpg'
import Dvorec from '../images/DvorecSovetov.jpg'
import Moskovskaya from '../images/Moskovskaya.jpg'
import Residence from '../images/Residence.jpg'
import SportUni from '../images/SportUni.jpg'
import Theatre from '../images/Theatre.jpg'
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

    return <YouTube videoId="mICDHBZr5N4" opts={opts} width='100%' height='100%' onReady={this._onReady} />;
    }

    _onReady(event) {
    event.target.pauseVideo();
    }
}

export const Voinov = () => {
    return (
        <Fragment>
            <div className='person_page'>
                <div className='main_info'>
                    <div className= 'text_info'>
                        <h2>Воинов Александр Петрович</h2>
                        <p>1902-1987</p>
                        <div className='main_text'>
                        <p>Архитектор, автор здания ЦК КПБ (Администрации Президента Республики Беларусь).<br/>
                        Член-корреспондент НАН Беларуси. Профессор. Заслуженный деятель искусств БССР, заслуженный строитель БССР.</p>
                        </div>
                    </div>
                    <div className='person_picture'>
                        <img src={VoinovImg} className="voinov" alt="voinov"/>
                    </div>
                </div>
                <div>    
                    <Timeline lineColor={'#ddd'}>
                        <TimelineItem
                        key="001"
                        dateText=" 03/12/1902"
                        style={{ color: '#e86971' }}>
                            <h5>Родился в Колпино (Санкт-Петербургская губерния)</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="002"
                        dateText="1929"
                        style={{ color: '#e86971' }}>
                            <h5>Окончил Московский высший художественно-технический институт</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="003"
                        dateText="1930 - 1941"
                        style={{ color: '#e86971' }}>
                            <h5>Работал в Минске: архитектор Белжилсоюза, заведующий сектора в белорусских филиалах Гипрогора РСФСР, директор Белгоспроекта, руководитель архитектурной мастерской</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="004"
                        dateText="1941 - 1949"
                        style={{ color: '#e86971' }}>
                            <h5>Председатель правления Союза архитекторов БССР</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="005"
                        dateText="С 1943"
                        style={{ color: '#e86971' }}>
                            <h5>Начальник Управления по делам архитектуры при СНК БССР</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="006"
                        dateText="С 1945"
                        style={{ color: '#e86971' }}>
                            <h5>Руководитель архитектурной мастерской в Белгоспроекте</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="007"
                        dateText="1948"
                        style={{ color: '#e86971' }}>
                            <h5>Заведующий кафедрой архитектуры</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="008"
                        dateText="1973"
                        style={{ color: '#e86971' }}>
                            <h5>Профессор-консультант Белорусского политехнического института</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="009"
                        dateText="01/10/1987"
                        style={{ color: '#e86971' }}>
                            <h5>Смерть</h5>
                        </TimelineItem>
                    </Timeline>
                </div>
                <h4>Наиболее значимые работы</h4>
                <div className='image_galery'>
                        <img src={Belarus} className="galery_photo" alt=""/>
                        <img src={Dvorec} className="galery_photo" alt=""/>
                        <img src={Moskovskaya} className="galery_photo" alt=""/>
                        <img src={Residence} className="galery_photo" alt=""/>
                        <img src={Theatre} className="galery_photo" alt=""/>
                        <img src={SportUni} className="galery_photo" alt=""/>
                </div>
                <div className='video-player'>
                    <MediaPlayerComponent/>
                </div>
                <div className="maps">
                    <YMaps query={{mode: 'release'}}>
                        <h4>Работы Воинова А.П. на карте</h4>
                        <Map
                        width="60vw"
                        height="50vh" 
                        defaultState={{center : [53.5343, 27.3318], zoom: 6}}
                        >
                            <Placemark geometry={[53.5320, 27.3221]}/>
                            <Placemark geometry={[53.5343, 27.3318]}/>
                            <Placemark geometry={[53.5355, 27.3352]}/>
                            <Placemark geometry={[53.5401, 27.3351]}/>
                            <Placemark geometry={[53.93553508072058, 27.489640984187265]}/>
                            <Placemark geometry={[55.76932179077747, 37.6205218184941]}/>
                        </Map>  
                    </YMaps> 
                </div>     
            </div>

        </Fragment>

    )
}