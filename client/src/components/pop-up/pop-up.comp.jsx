import React from 'react';
import './pop-up.styles.scss';

import * as AiIcons from 'react-icons/ai';
import Form from '../Form/Form.comp';

const PopUp = (props) => {
    return (props.trigger) ? (
        <>
            <div className="pup" onClick={() => props.closePup(false)} />
            <div className="pup-container">
                <div className="pup__exit" onClick={() => props.closePup(false)}><AiIcons.AiOutlineCloseCircle size="20" /></div>
                <h1 className="pup__title">Join My Newsletter</h1>
                <Form />
            </div>
        </>
    ) : '';

}

export default PopUp
