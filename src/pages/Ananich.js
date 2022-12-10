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
import {useTranslation} from "react-i18next";

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

function Ananich() {
    const {t} = useTranslation();
    return (
        <Fragment>
            <div className='person_page'>
                <div className='main_info'>
                    <div className= 'text_info'>
                        <h1>{t("ananich.name")}</h1>
                        <p>1955-2015</p>
                        <div className='main_text'>
                            <p>{t("ananich.description_1")}<br/>
                            {t("ananich.description_2")}<br/>
                            {t("ananich.description_3")}<br/>
                            {t("ananich.description_4")}</p>
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
                            <h5>{t("ananich.timeline_1")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="002"
                        dateText="1978"
                        style={{ color: '#e86971' }}>
                            <h5>{t("ananich.timeline_2")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="003"
                        dateText="2002"
                        style={{ color: '#e86971' }}>
                            <h5>{t("ananich.timeline_3")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="004"
                        dateText="2004"
                        style={{ color: '#e86971' }}>
                            <h5>{t("ananich.timeline_4")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="005"
                        dateText="2007"
                        style={{ color: '#e86971' }}>
                            <h5>{t("ananich.timeline_5")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="006"
                        dateText="2008"
                        style={{ color: '#e86971' }}>
                            <h5>{t("ananich.timeline_6")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="007"
                        dateText="28/02/2015"
                        style={{ color: '#e86971' }}>
                            <h5>{t("ananich.timeline_7")}</h5>
                        </TimelineItem>
                    </Timeline>
                </div>
                <h4>{t("ananich.works")}</h4>
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
                        <h4>{t("ananich.map")}</h4>
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

export default Ananich;