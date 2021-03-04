import React from 'react'
import './header.styles.scss';
import Logo from '../../assets/lee.logo.svg';
import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';


const header = () => {
    return (
        <>
            <div className="header container">
                <div className="header__main">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <div className="header__main--social-container">
                        <p>Follow me on</p>
                        <div className="header__main--social-items">
                            <a href="https://www.facebook.com/" className="header__main--social-item">
                                <FaIcons.FaFacebookF />
                            </a>
                            <Link to="#" className="header__main--social-item">
                                <FaIcons.FaTwitter />
                            </Link>
                            <Link to="#" className="header__main--social-item">
                                <FaIcons.FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="header__nav" style={{ textAlign: 'center', height: '3.5vh' }}>
                <NavLink exact activeClassName="selected" className="header__nav--item" to="/">Home</NavLink>
                <NavLink exact activeClassName="selected" className="header__nav--item" to="/about">About</NavLink>
                <NavLink exact activeClassName="selected" className="header__nav--item" to="/books">Books</NavLink>
            </nav>


        </>
    )
}

export default header
