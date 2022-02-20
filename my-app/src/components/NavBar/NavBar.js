import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="header-nav">
            <ul className="nav-list">
                <li className="nav-item nav-item-sign active"><Link to='/'>  Home </Link></li>
                <li className="nav-item nav-item-sign active"><Link to='/favorite '>  Favorite </Link></li>
            </ul>
        </nav>
    )
}

export default NavBar