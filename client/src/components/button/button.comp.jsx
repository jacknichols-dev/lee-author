import React from 'react';
import './button.styles.scss';

const Button = (props) => {
    return (
        <a href={props.link} target={props.target} >
            <button className="button btn-center" type={props.type} id={props.id}> {props.children} </button>
        </a>
    )
}

export default Button
