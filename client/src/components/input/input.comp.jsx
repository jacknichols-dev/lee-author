import React from 'react';
import './input.styles.scss';

const Input = (props) => {
    return (
        <div>
            <input id={props.id} type={props.type} placeholder={props.placeholder} pattern={props.pattern} required />
        </div>
    )
}

export default Input
