import React, { Component } from 'react';
import './notification.styles.scss';

export default class Notification extends Component {
    render() {
        return (
            <div className={`notification ${this.props.level} ${this.props.visible ? " visible" : ""}`}>
                <img src={this.props.src} alt={this.props.alt} />
                <p>{this.props.message}</p>
            </div>
        )
    }
}
