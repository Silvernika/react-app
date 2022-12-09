import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'
export const Navbar = () => (
    <Fragment>
    <nav className="navbar navbar-dark navbar-expand-xl bg-danger fixed-top">
        <div className="navbar-brand">
            <h3>Learn Belarus</h3>
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" 
                to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" 
                to="/People">People</NavLink>
            </li>
        </ul>
    </nav>
    </Fragment>
)