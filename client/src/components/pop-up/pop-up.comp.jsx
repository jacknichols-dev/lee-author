import React from 'react';
import './pop-up.styles.scss';
import Input from '../input/input.comp';
import Button from '../button/button.comp';
import * as AiIcons from 'react-icons/ai';

const PopUp = (props) => {
    return (props.trigger) ? (
        <div className="pup">
            <div className="pup-container">
                <div className="pup__exit" onClick={() => props.closePup(false)}><AiIcons.AiOutlineCloseCircle size="30" /></div>
                <h1 className="pup__title">Join My Newsletter</h1>
                <p className="pup__prg">
                    I publish a newsletter once a month with behind the scenes info,
                    updates and details of special offers and new releases.
                    If you would be happy to hear from me please pop your email address in the box.
                </p>
                <form action="/subscribe" method="POST">

                    <Input type="name" id="name" placeholder="Enter your name" />
                    <Input type="email" id="email" placeholder="Enter your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />

                    <Button type="submit" id="cta">Subscribe</Button>

                </form>

            </div>

        </div>
    ) : '';
}

export default PopUp
