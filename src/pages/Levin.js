import React, {Component, Fragment} from 'react';
import './Person.scss'
import LevinImg from '../images/levin.jpg'
import RedBeach from '../images/red_beach.jpg'
import GettoMemorial from '../images/getto_memorial.jpg'
import Hatyn from '../images/hatyn.jpg'
import Proryv from '../images/proryv.jpg'
import Suburb from '../images/Traeckaje_suburb.jpg'
import Subway from '../images/Nyamiga.jpg'
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

    return <YouTube videoId="P2-yBJvcJUo" opts={opts} width='100%' height='100%' onReady={this._onReady} />;
    }

    _onReady(event) {
    event.target.pauseVideo();
    }
}



export const Levin = () => {
    return (
        <Fragment>
            <div className='person_page'>
                <div className='main_info'>
                    <div className= 'text_info'>
                        <h2>Левин Леонид Менделеевич</h2>
                        <p>1936-2014</p>
                        <div className='main_text'>
                            <p>Заслуженный архитектор Республики Беларусь, Лауреат Ленинской премии<br/>
                            и премии Ленинского комсомола, Лауреат премии Волгоградского Комсомола,
                            дважды лауреат Государственной премии Республики Беларусь, лауреат многих престижных конкурсов<br/>
                            и смотров архитектурных работ, Академик Международной и Белорусской Академий архитектуры,<br/>
                            Председатель Союза белорусских еврейских общественных объединений и общин с 1991 года.<br/>
                            Один из авторов мемориального комплекса «Хатынь»,<br/>
                            за который (в составе авторского коллектива) был удостоен Ленинской премии.</p>
                        </div>
                    </div>
                    <div className='person_picture'>
                        <img src={LevinImg} className="levin" alt="levin"/>
                    </div>
                </div>
                <div>    
                    <Timeline lineColor={'#ddd'}>
                        <TimelineItem
                        key="001"
                        dateText="25/07/1936"
                        style={{ color: '#e86971' }}>
                            <h5>Рождение</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="002"
                        dateText="1954 - 1960"
                        style={{ color: '#e86971' }}>
                            <h5>Учёба в Белорусском политехническом институте</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="003"
                        dateText="С 1960"
                        style={{ color: '#e86971' }}>
                            <h5>Работа в институте «Минскпроект»</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="004"
                        dateText="1960 - 1967"
                        style={{ color: '#e86971' }}>
                            <h5>Участие в создании парка им. 50-летия Советской власти</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="005"
                        dateText="1968"
                        style={{ color: '#e86971' }}>
                            <h5>Участие в создании выставочного павильона ВДНХ БССР в Минске</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="006"
                        dateText="1970"
                        style={{ color: '#e86971' }}>
                            <h5>Удостоен Ленинской премии за мемориальный комплекс «Хатынь»</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="007"
                        dateText="С 1997"
                        style={{ color: '#e86971' }}>
                            <h5>Директор собственной творческой мастерской УП «Творческая мастерская архитектора Л. Левина»</h5>
                        </TimelineItem>
                        <TimelineItem
                        key="008"
                        dateText="01/03/2014"
                        style={{ color: '#e86971' }}>
                            <h5>Смерть</h5>
                        </TimelineItem>
                    </Timeline>
                </div>
                <h4>Наиболее значимые работы</h4>
                <div className='image_galery'>
                    {/* <div className='galery_row'> */}
                        <img src={Hatyn} className="galery_photo" alt="hatyn"/>
                        <img src={RedBeach} className="galery_photo" alt="red beach"/>
                        <img src={GettoMemorial} className="galery_photo" alt="getto memorial"/>
                    {/* </div>
                    <div className='galery_row'> */}
                        <img src={Proryv} className="galery_photo" alt="breakthrough"/>
                        <img src={Suburb} className="galery_photo" alt="suburb"/>
                        <img src={Subway} className="galery_photo" alt="nemiga"/>
                    {/* </div> */}
                </div>
                <div className='video-player'>
                    <MediaPlayerComponent/>
                </div>
                <div className="maps">
                    <YMaps query={{mode: 'release'}}>
                        <h4>Работы Левина Л.М. на карте</h4>
                        <Map
                        width="60vw"
                        height="50vh" 
                        defaultState={{center : [53.906030, 27.554072], zoom: 6}}
                        >
                            <Placemark geometry={[53.906030, 27.554072]}/>
                            <Placemark geometry={[53.910362, 27.542329]}/>
                            <Placemark geometry={[54.334775, 27.943737]}/>
                            <Placemark geometry={[55.205518, 28.493428]}/>
                            <Placemark geometry={[53.908464, 27.556129]}/>
                            <Placemark geometry={[52.963093, 29.776019]}/>
                        </Map>  
                    </YMaps> 
                </div>     
            </div>
        </Fragment>
    )
}