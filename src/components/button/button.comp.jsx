import React from 'react';
import './button.styles.scss';

const Button = (props) => {
    return (
        <a href="/">
            <button className="button">{props.children}</button>
        </a>
    )
}

export default Button
