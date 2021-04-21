import React, { Component } from 'react';
import './notification.styles.scss';

export default class Notification extends Component {
    render() {
        return (
            <div className={`notification ${level}${this.props.visible ? " visible" : ""}`}>
                <p>{this.props.message}</p>
            </div>
        )
    }
}
