import React, {Component, Fragment} from 'react';
import './Person.scss'
import GrigorevImg from '../images/Grigorev.jpg'
import WritersHouse from '../images/WritersHouse.jpg'
import CultureUniversity from '../images/CultureUniversity.jpg'
import Kupala from '../images/Kupala_mem.jpg'
import KirillMefodiy from '../images/Kirill&Mefodiy.jpg'
import Rahmaninov from '../images/Rahmaninov_mem.jpg'
import Zhukov from '../images/Zhukov_mem.jpg'
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

    return <YouTube videoId="hwummpBhQzk" opts={opts} width='100%' height='100%' onReady={this._onReady} />;
    }

    _onReady(event) {
    event.target.pauseVideo();
    }
}
export const Grigorev = () => {
    return (
        <Fragment>
            <div className='person_page'>
                <div className='main_info'>
                    <div className= 'text_info'>
                        <h2>Григорьев Юрий Пантелеймонович</h2>
                        <p>1932-2019</p>
                        <div className='main_text'>
                            <p>Заслуженный архитектор РФ (1993г.), Почётный строитель России (1998г.)<br/>
                            и г.Москвы (1999г.), Почётный архитектор России (2001г.), Заслуженный архитектор<br/>
                            Республики Беларусь (2007г.), Народный архитектор РФ (2008г.)<br/>
                            Автор Дома Литераторов.</p>
                        </div>
                    </div>
                    <div className='person_picture'>
                        <img src={GrigorevImg} className="grigorev" alt="grigorev"/>
                    </div>
                </div>
                <div>    
                    <Timeline lineColor={'#ddd'}>
                        <TimelineItem
                        key="001"
                        dateText=" 29/05/1932"
                        style={{ color: '#e86971' }}>
                            <h5>Родился в посёлке Кулотино Ленинградской области</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="002"
                        dateText="1956"
                        style={{ color: '#e86971' }}>
                            <h5>Окончил Московский архитектурный институт</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="003"
                        dateText="1956 - 1986"
                        style={{ color: '#e86971' }}>
                            <h5>Работал в Беларуси, пройдя путь от архитектора до заместителя Председателя Госстроя республики</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="004"
                        dateText="1986"
                        style={{ color: '#e86971' }}>
                            <h5>Приглашен в Москву на должность первого заместителя Председателя Комитета по архитектуре и градостроительству Москвы</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="005"
                        dateText="1994 - 2011"
                        style={{ color: '#e86971' }}>
                            <h5>Возглавлял Московский научно-исследовательский и проектный институт типологии, экспериментального проектирования</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="006"
                        dateText="2002 - 2011"
                        style={{ color: '#e86971' }}>
                            <h5>Был первым заместителем главного архитектора города Москвы</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="007"
                        dateText="21/03/2019"
                        style={{ color: '#e86971' }}>
                            <h5>Умер. Похоронен в Москве на Троекуровском кладбище</h5>
                        </TimelineItem>
                    </Timeline>
                </div>
                <h4>Наиболее значимые работы</h4>
                <div className='image_galery'>
                        <img src={WritersHouse} className="galery_photo" alt=""/>
                        <img src={CultureUniversity} className="galery_photo" alt=""/>
                        <img src={Kupala} className="galery_photo" alt=""/>
                        <img src={KirillMefodiy} className="galery_photo" alt=""/>
                        <img src={Rahmaninov} className="galery_photo" alt=""/>
                        <img src={Zhukov} className="galery_photo" alt=""/>
                </div>
                <div className='video-player'>
                    <MediaPlayerComponent/>
                </div>
                <div className="maps">
                    <YMaps query={{mode: 'release'}}>
                        <h4>Работы Григорьева Ю.П. на карте</h4>
                        <Map
                        width="60vw"
                        height="50vh" 
                        defaultState={{center : [55.4520, 37.3700], zoom: 6}}
                        >
                            <Placemark geometry={[53.906119, 27.574829]}/>
                            <Placemark geometry={[53.88684129133669, 27.541890702105178]}/>
                            <Placemark geometry={[55.4516, 37.3802]}/>
                            <Placemark geometry={[55.4520, 37.3700]}/>
                            <Placemark geometry={[55.4432, 37.3222]}/>
                        </Map>  
                    </YMaps> 
                </div>     
            </div>
        </Fragment>

    )
}