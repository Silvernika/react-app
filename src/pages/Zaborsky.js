import React, {Component, Fragment} from 'react';
import './Person.scss'
import ZaborskyImg from '../images/Zaborsky.jpeg'
import KastrychnickajaSquare from '../images/Kastrychnickaja_square.jpg'
import Kolas from '../images/KolasSquare.jpg'
import LeninStreet from '../images/LeninStreet.jpg'
import School from '../images/SuvorovSchool.jpg'
import Victory from '../images/Victory-square.jpg'
import Pioneer from '../images/pioneer.jpg'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { YMaps, Map, Placemark } from "react-yandex-maps"
import YouTube from 'react-youtube';
import { useTranslation } from 'react-i18next';


class MediaPlayerComponent extends Component {
    render() {
        const opts = {
        playerVars: {
        autoplay: 1,
        },
    };

    return <YouTube videoId="zhiprOQKYXU" opts={opts} width='100%' height='100%' onReady={this._onReady} />;
    }

    _onReady(event) {
    event.target.pauseVideo();
    }
}
function Zaborsky() {
    const { t } = useTranslation();
    return (
        <Fragment>
            <div className='person_page'>
                <div className='main_info'>
                    <div className= 'text_info'>
                        <h2>{t("zaborsky.name")}</h2>
                        <p>1909-1999</p>
                        <div className='main_text'>
                        <p>{t("zaborsky.description_1")}<br/>
                        {t("zaborsky.description_2")}<br/>
                        {t("zaborsky.description_3")}</p>
                        </div>
                    </div>
                    <div className='person_picture'>
                        <img src={ZaborskyImg} className="zaborsky" alt="zaborsky"/>
                    </div>
                </div>
                <div>    
                    <Timeline lineColor={'#ddd'}>
                        <TimelineItem
                        key="001"
                        dateText=" 29/10/1909"
                        style={{ color: '#e86971' }}>
                            <h5>{t("zaborsky.timeline_1")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="002"
                        dateText="1933"
                        style={{ color: '#e86971' }}>
                            <h5>{t("zaborsky.timeline_2")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="003"
                        dateText="1939"
                        style={{ color: '#e86971' }}>
                            <h5>{t("zaborsky.timeline_3")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="004"
                        dateText="1945 - 1964"
                        style={{ color: '#e86971' }}>
                            <h5>{t("zaborsky.timeline_4")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="005"
                        dateText="1950"
                        style={{ color: '#e86971' }}>
                            <h5>{t("zaborsky.timeline_5")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="006"
                        dateText="1952"
                        style={{ color: '#e86971' }}>
                            <h5>{t("zaborsky.timeline_6")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="007"
                        dateText="1971"
                        style={{ color: '#e86971' }}>
                            <h5>{t("zaborsky.timeline_7")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="008"
                        dateText="1990"
                        style={{ color: '#e86971' }}>
                            <h5>{t("zaborsky.timeline_8")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="009"
                        dateText="27/03/1999"
                        style={{ color: '#e86971' }}>
                            <h5>{t("zaborsky.timeline_9")}</h5>
                        </TimelineItem>
                    </Timeline>
                </div>
                <h4>{t("zaborsky.works")}</h4>
                <div className='image_galery'>
                        <img src={KastrychnickajaSquare} className="galery_photo" alt=""/>
                        <img src={Kolas} className="galery_photo" alt=""/>
                        <img src={Victory} className="galery_photo" alt=""/>
                        <img src={LeninStreet} className="galery_photo" alt=""/>
                        <img src={School} className="galery_photo" alt=""/>
                        <img src={Pioneer} className="galery_photo" alt=""/>
                </div>
                <div className='video-player'>
                    <MediaPlayerComponent/>
                </div>
                <div className="maps">
                    <YMaps query={{mode: 'release'}}>
                        <h4>{t("zaborsky.map")}</h4>
                        <Map
                        width="60vw"
                        height="50vh" 
                        defaultState={{center : [53.89962011575294, 27.56318712836381], zoom: 12}}
                        >
                            <Placemark geometry={[53.89962011575294, 27.56318712836381]}/>
                            <Placemark geometry={[53.90872212502647, 27.574830734185806]}/>
                            <Placemark geometry={[53.91590108483873, 27.582800776514727]}/>
                            <Placemark geometry={[53.90252926375405, 27.561461233130238]}/>
                            <Placemark geometry={[53.895188903582365, 27.566737155349344]}/>
                            <Placemark geometry={[53.91142228718414, 27.559079341857267]}/>
                        </Map>  
                    </YMaps> 
                </div>     
            </div>
        </Fragment>

    )
}

export default Zaborsky