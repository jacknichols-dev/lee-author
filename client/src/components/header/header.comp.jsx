import React from 'react'
import './header.styles.scss';
import Logo from '../../assets/lee.logo.svg';
import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';


const header = () => {
    return (
        <>
            <div className="header-pos">
                <div className="header container">
                    <div className="header__main">
                        <Link to="/lee-author">
                            <img className="header__main--logo" src={Logo} alt="logo" height="50" />
                        </Link>
                        <div className="header__main--social-container">

                            <p>Follow me on</p>

                            <div className="header__main--social-items">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className="header__main--social-item">
                                    <FaIcons.FaFacebookF />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className="header__main--social-item">
                                    <FaIcons.FaTwitter />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className="header__main--social-item">
                                    <FaIcons.FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="header__nav">
                    <NavLink activeClassName="selected" className="header__nav--item" to="/lee-author" end>Home</NavLink>
                    <NavLink activeClassName="selected" className="header__nav--item" to="/about">About</NavLink>
                    <NavLink activeClassName="selected" className="header__nav--item" to="/books" end>Books</NavLink>
                </nav>
            </div>


        </>
    )
}

export default header
