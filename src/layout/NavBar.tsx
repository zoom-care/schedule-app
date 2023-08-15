import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <ul className='nav-bar nav-bar__container'>
            <li>
                <NavLink to="/home" className={({ isActive }) => 'nav-bar nav-bar__item' + (isActive ? ' nav-bar__item--active' : '')}> Home </NavLink>
                <NavLink to="/appointments" className={({ isActive }) => 'nav-bar nav-bar__item' + (isActive ? ' nav-bar__item--active' : '')}> Appointments </NavLink>
            </li>
        </ul>
    );
};

export default NavBar;
