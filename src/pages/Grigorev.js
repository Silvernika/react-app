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
import { useTranslation } from 'react-i18next';


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
function Grigorev() {
    const {t} = useTranslation();
    return (
        <Fragment>
            <div className='person_page'>
                <div className='main_info'>
                    <div className= 'text_info'>
                        <h2>{t("grigorev.name")}</h2>
                        <p>1932-2019</p>
                        <div className='main_text'>
                            <p>{t("grigorev.description_1")}<br/>
                            {t("grigorev.description_2")}<br/>
                            {t("grigorev.description_3")}<br/>
                            {t("grigorev.description_4")}</p>
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
                            <h5>{t("grigorev.timeline_1")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="002"
                        dateText="1956"
                        style={{ color: '#e86971' }}>
                            <h5>{t("grigorev.timeline_2")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="003"
                        dateText="1956 - 1986"
                        style={{ color: '#e86971' }}>
                            <h5>{t("grigorev.timeline_3")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="004"
                        dateText="1986"
                        style={{ color: '#e86971' }}>
                            <h5>{t("grigorev.timeline_4")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="005"
                        dateText="1994 - 2011"
                        style={{ color: '#e86971' }}>
                            <h5>{t("grigorev.timeline_5")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="006"
                        dateText="2002 - 2011"
                        style={{ color: '#e86971' }}>
                            <h5>{t("grigorev.timeline_6")}</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="007"
                        dateText="21/03/2019"
                        style={{ color: '#e86971' }}>
                            <h5>{t("grigorev.timeline_7")}</h5>
                        </TimelineItem>
                    </Timeline>
                </div>
                <h4>{t("grigorev.works")}</h4>
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
                        <h4>{t("grigorev.map")}</h4>
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

export default Grigorev;