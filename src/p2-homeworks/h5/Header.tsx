import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.header}>
            <NavLink to={'/pre-junior'} className={s.link}>pre-junior</NavLink>
            <NavLink to={'/junior'} className={s.link}>junior</NavLink>
            <NavLink to={'/juniorplus'} className={s.link}>junior+</NavLink>
            <div className={s.menu}>pages</div>
        </div>
    )
}

export default Header
