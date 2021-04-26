import React from 'react';
import './button.styles.scss';

const Button = (props) => {


    return (
        <button className="button btn-center" type={props.type} id={props.id} > {props.children} </button>
    )
}

export default Button
