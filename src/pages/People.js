import React, { Fragment } from "react";
import "./People.scss";
import { useTranslation } from "react-i18next";
import Zaborsky from "../images/Zaborsky.jpeg"
import Voinov from "../images/Voinov.jpg"
import Phomin from "../images/Phomin.png"
import Ananich from "../images/Ananich.jpg"
import Grigorev from "../images/Grigorev.jpg"
import Levin from "../images/levin.jpg"
import Search from "../Search"
import { useState } from 'react';

const filterPosts = (names, query) => {
  if (!query) {
      return names;
  }

  return names.filter((name) => {
    // return only first word of name
    const postName = name.name.toLowerCase().split(' ')[0];
    const postQuery = query.toLowerCase().split(' ')[0];
    return postName.includes(postQuery);
      // const postName = name.name.toLowerCase().i
      // return postName.includes(query);
  });
};



function People() {
  const { t } = useTranslation();
  const names = [
    { id: '1', name: t('zaborsky.name') },
    { id: '2', name: t('voinov.name') },
    { id: '3', name: t('phomin.name') },
    { id: '4', name: t('ananich.name') },
    { id: '5', name: t('grigorev.name') },
    { id: '6', name: t('levin.name') },
  ];
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(names, searchQuery);
  return (
         <Fragment>
         <div className='People_page'>
         <h1 class="display-4 text-center ">{t("people.title")}</h1>
         <div>
         <Search 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
         />
         <div className="container">
         <ul className="List">
         {filteredPosts.map(name => (
                    <li key={name.id}>{name.name}</li>
                ))}
            </ul>
            </div>
          </div>
          <div className='Person'>
             <div className='Name'>
               <h3>{t("zaborsky.name")}</h3>
               <p>1909-1999</p>
             <div className='information'>
              <p>{t("zaborsky.description_1")}<br/>
              {t("zaborsky.description_2")}<br/>
              {t("zaborsky.description_3")}</p>
              <a href="/react-app/Zaborsky" class="link-primary">{t("people.read_more")}</a>
             </div>
            </div>
            <div className='picture'>
             <img src={Zaborsky} className="photo" alt="ph"/>
            </div>  
          </div>
          <div className='Person'>
             <div className='Name'>
               <h3>{t("voinov.name")}</h3>
               <p>1902-1987</p>
             <div className='information'>
             <p>{t("voinov.description_1")}<br/>
                     {t("voinov.description_2")}<br/>
                     {t("voinov.description_3")}</p>
              <a href="/react-app/Voinov" class="link-primary">{t("people.read_more")}</a>
             </div>
            </div>
            <div className='picture'>
             <img src={Voinov} className="photo" alt="ph"/>
            </div>  
          </div>
          <div className='Person'>
             <div className='Name'>
               <h3>{t("phomin.name")}</h3>
               <p>1904-1989</p>
             <div className='information'>
              <p>{t("phomin.description_1")}<br/>
              {t("phomin.description_2")}<br/>
              {t("phomin.description_3")}<br/>
              {t("phomin.description_4")}</p>
              <a href="/react-app/Phomin" class="link-primary">{t("people.read_more")}</a>
             </div>
            </div>
            <div className='picture'>
             <img src={Phomin} className="photo_3" alt="ph"/>
            </div>  
          </div>
          <div className='Person'>
             <div className='Name'>
               <h3>{t("ananich.name")}</h3>
               <p>1955-2015</p>
             <div className='information'>
              <p>{t("ananich.description_1")}<br/>
              {t("ananich.description_2")}<br/>
              {t("ananich.description_3")}<br/>
              {t("ananich.description_4")}</p>
              <a href="/react-app/Ananich" class="link-primary">{t("people.read_more")}</a>
             </div>
            </div>
            <div className='picture'>
             <img src={Ananich} className="photo_4" alt="ph"/>
            </div>  
          </div>
          <div className='Person'>
             <div className='Name'>
               <h3>{t("grigorev.name")}</h3>
               <p>1932-2019</p>
             <div className='information'>
              <p>{t("grigorev.description_1")}<br/>
              {t("grigorev.description_2")}<br/>
              {t("grigorev.description_3")}<br/>
              {t("grigorev.description_4")}</p>
              <a href="/react-app/Grigorev" class="link-primary">{t("people.read_more")}</a>
             </div>
            </div>
            <div className='picture'>
             <img src={Grigorev} className="photo_4" alt="ph"/>
            </div>  
          </div>
          <div className='Person'>
           <div className='Name'>
             <h3>{t("levin.name")}</h3>
             <p>1936-2014</p>
            <div className='title_information'>
             <p>{t("levin.description_1")}<br/>
             {t("levin.description_2")}
             {t("levin.description_3")}<br/>
             {t("levin.description_4")}<br/>
             {t("levin.description_5")}<br/>
             {t("levin.description_6")}</p>
              <a href="/react-app/Levin" class="link-primary">{t("people.read_more")}</a>
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

export default People;
