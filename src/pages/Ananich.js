import React, {Component, Fragment} from 'react';
import './Person.scss'
import AnanichImg from '../images/Ananich.jpg'
import Build1 from '../images/Ananich_build1.jpg'
import Build2 from '../images/Ananich_build2.jpg'
import Build3 from '../images/Ananich_build3.jpg'
import Build4 from '../images/Ananich_build4.jpg'
import Build5 from '../images/Ananich_build5.jpg'
import Build6 from '../images/Ananich_build6.jpg'
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

    return <YouTube videoId="ezGQXbnuu2c" opts={opts} width='100%' height='100%' onReady={this._onReady} />;
    }

    _onReady(event) {
    event.target.pauseVideo();
    }
}

export const Ananich = () => {
    return (
        <Fragment>
            <div className='person_page'>
                <div className='main_info'>
                    <div className= 'text_info'>
                        <h2>Ананич Юрий Степанович</h2>
                        <p>1955-2015</p>
                        <div className='main_text'>
                            <p>Белорусский архитектор. Внёс вклад в формирование<br/>
                            архитектурного облика современного Минска и других белорусских городов.<br/>
                            Член Белорусского союза архитекторов. Автор Жилого комплекса посольства<br/>
                            Российской федерации в Беларуси по улице Орловской в Минске (2007)</p>
                        </div>
                    </div>
                    <div className='person_picture'>
                        <img src={AnanichImg} className="ananich" alt="ananich"/>
                    </div>
                </div>
                <div>    
                    <Timeline lineColor={'#ddd'}>
                        <TimelineItem
                        key="001"
                        dateText="23/11/1955"
                        style={{ color: '#e86971' }}>
                            <h5>Рождение</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="002"
                        dateText="1978"
                        style={{ color: '#e86971' }}>
                            <h5>Закончил архитектурный факультет Белорусского государственного политехнического института</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="003"
                        dateText="2002"
                        style={{ color: '#e86971' }}>
                            <h5>Реконструкция здания Национального банка Республики Беларусь</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="004"
                        dateText="2004"
                        style={{ color: '#e86971' }}>
                            <h5>Построен головной офис BSB-Банк по улице Заславской в Минске</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="005"
                        dateText="2007"
                        style={{ color: '#e86971' }}>
                            <h5>Построен жилой комплекс посольства Российской федерации в Республике Беларусь </h5>
                        </TimelineItem>
                        <TimelineItem
                        key="006"
                        dateText="2008"
                        style={{ color: '#e86971' }}>
                            <h5>Застройка территории, прилегающей к Национальной библиотеке РБ</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="007"
                        dateText="28/02/2015"
                        style={{ color: '#e86971' }}>
                            <h5>Трагически погиб на железнодорожной станции Птичь</h5>
                        </TimelineItem>
                    </Timeline>
                </div>
                <h4>Наиболее значимые работы</h4>
                <div className='image_galery'>
                        <img src={Build1} className="galery_photo" alt=""/>
                        <img src={Build2} className="galery_photo" alt=""/>
                        <img src={Build3} className="galery_photo" alt=""/>
                        <img src={Build4} className="galery_photo" alt=""/>
                        <img src={Build5} className="galery_photo" alt=""/>
                        <img src={Build6} className="galery_photo" alt=""/>
                </div>
                <div className='video-player'>
                    <MediaPlayerComponent/>
                </div>
                <div className="maps">
                    <YMaps query={{mode: 'release'}}>
                        <h4>Работы Ананича Ю.С. на карте</h4>
                        <Map
                        width="60vw"
                        height="50vh" 
                        defaultState={{center : [53.906030, 27.554072], zoom: 6}}
                        >
                            <Placemark geometry={[53.5550, 27.3152]}/>
                            <Placemark geometry={[53.5208, 30.2053]}/>
                            <Placemark geometry={[53.842953, 27.537806]}/>
                            <Placemark geometry={[60.143490, 30.203460]}/>
                            <Placemark geometry={[61.259847, 73.415159]}/>
                        </Map>  
                    </YMaps> 
                </div>     
            </div>
        </Fragment>

    )
}