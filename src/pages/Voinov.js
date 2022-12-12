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
import {useTranslation} from "react-i18next";


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

function Voinov() {
    const {t} = useTranslation();
    return (
        <Fragment>
            <div className='person_page'>
                <div className='main_info'>
                    <div className= 'text_info'>
                        <h2>{t("voinov.name")}</h2>
                        <p>1902-1987</p>
                        <div className='main_text'>
                        <p>{t("voinov.description_1")}<br/>
                        {t("voinov.description_2")}<br/>
                        {t("voinov.description_3")}<br/>
                        {t("voinov.description_4")}</p>
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
                            <h5>{t("voinov.timeline_1")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="002"
                        dateText="1929"
                        style={{ color: '#e86971' }}>
                            <h5>{t("voinov.timeline_2")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="003"
                        dateText="1930 - 1941"
                        style={{ color: '#e86971' }}>
                            <h5>{t("voinov.timeline_3")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="004"
                        dateText="1941 - 1949"
                        style={{ color: '#e86971' }}>
                            <h5>{t("voinov.timeline_4")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="005"
                        dateText={t("date") + " 1943"}
                        style={{ color: '#e86971' }}>
                            <h5>{t("voinov.timeline_5")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="006"
                        dateText={t("date") + " 1945"}
                        style={{ color: '#e86971' }}>
                            <h5>{t("voinov.timeline_6")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="007"
                        dateText="1948"
                        style={{ color: '#e86971' }}>
                            <h5>{t("voinov.timeline_7")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="008"
                        dateText="1973"
                        style={{ color: '#e86971' }}>
                            <h5>{t("voinov.timeline_8")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="009"
                        dateText="01/10/1987"
                        style={{ color: '#e86971' }}>
                            <h5>{t("voinov.timeline_9")}</h5>
                        </TimelineItem>
                    </Timeline>
                </div>
                <h4>{t("voinov.works")}</h4>
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
                        <h4>{t("voinov.map")}</h4>
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

export default Voinov