import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'
import i18n from '../i18n';
import {useTranslation} from "react-i18next";

function Navbar() {
    const {t} = useTranslation();
    return (
    <Fragment>
    <nav className="navbar navbar-dark navbar-expand-xl bg-danger fixed-top">
        <div className="navbar-brand">
            <h3>{t("navbar.title")}</h3>
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" 
                to="/react-app/">{t("navbar.home")}</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" 
                to="/People">{t("navbar.people")}</NavLink>
            </li>
        </ul>
        <div className="nav-button">
                <button className="en-button"
                onClick={() => i18n.changeLanguage('en')}>{t("navbar.en")}</button>
                <button className="ru-button"
                onClick={() => i18n.changeLanguage('ru')}>{t("navbar.ru")}</button>
            </div>
    </nav>
    </Fragment>
    );
}

export default Navbar;