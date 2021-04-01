import React from 'react';
import './button.styles.scss';

const Button = (props) => {
    return (
        <a href="/">
            <button className="button" type={props.type} id={props.id}>{props.children}</button>
        </a>
    )
}

export default Button
