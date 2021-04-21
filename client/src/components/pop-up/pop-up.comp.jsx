import React from 'react';
import './pop-up.styles.scss';

import * as AiIcons from 'react-icons/ai';
import Form from '../Form/Form.comp';

const PopUp = (props) => {
    return (props.trigger) ? (
        <div className="pup">
            <div className="pup-container">
                <div className="pup__exit" onClick={() => props.closePup(false)}><AiIcons.AiOutlineCloseCircle size="20" /></div>
                <h1 className="pup__title">Join My Newsletter</h1>
                <p className="pup__prg">
                    I publish a newsletter once a month with behind the scenes info,
                    updates and details of special offers and new releases.
                    If you would be happy to hear from me please pop your email address in the box.
                </p>
                <Form />
            </div>

        </div>
    ) : '';
}

export default PopUp
