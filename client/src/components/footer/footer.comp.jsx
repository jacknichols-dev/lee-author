import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import './footer.styles.scss';
import Form from '../Form/Form.comp';



const Footer = (props) => {

    const today = new Date();

    return (


        <>
            <div className="footer container">
                <div className="footer__content">
                    <div className="footer__content--container">
                        <div className="footer__content--subscribe footer__content--item">
                            <h1>SUBSCRIBE</h1>
                            <div className="footer__content--sub-box">
                                <Form />
                            </div>
                        </div>

                        <div className="footer__content--contact footer__content--item">
                            <h1>CONTACT</h1>
                            <div className="footer__content--contact-container">
                                <div className="footer__content--agent">
                                    <FiIcons.FiMail size="30" />
                                    <p>Contact Agent</p>
                                    <h4><a href="mailto:publishing@soundpublishing.co.uk">publishing@soundpublishing.co.uk</a></h4>
                                </div>
                                <div className="footer__content--author">
                                    <BiIcons.BiUserCircle size="33" />
                                    <p>Contact Author</p>
                                    <h4><a href="mailto:lee@leewoodauthor.com">lee@leewoodauthor.com</a></h4>
                                </div>
                            </div>
                        </div>

                        <div className="footer__content--navigate footer__content--item">
                            <h1>NAVIGATE</h1>
                            <ul>
                                <Link to="/lee-author">
                                    <li>
                                        Home
                                    </li>
                                </Link>
                                <Link to="/about">
                                    <li>
                                        About
                                    </li>
                                </Link>
                                <Link to="/books">
                                    <li>
                                        Books
                                    </li>
                                </Link>
                            </ul>
                        </div>

                        <div className="footer__content--socials footer__content--item">
                            <h1>SOCIALS</h1>
                            <a target="_blank" href="https://www.facebook.com/" className="header__main--social-item footer__content--socials-item">
                                <FaIcons.FaFacebookF size="30" />
                            </a>
                            <a target="_blank" href="https://www.facebook.com/" className="header__main--social-item footer__content--socials-item">
                                <FaIcons.FaTwitter size="30" />
                            </a>
                            <a target="_blank" href="https://www.facebook.com/" className="header__main--social-item footer__content--socials-item">
                                <FaIcons.FaLinkedinIn size="30" />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
            <div className="footer__bottom">
                <div className="container">

                    <p>© Lee Wood {today.getFullYear()} - all rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer
