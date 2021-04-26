import React, { Component } from 'react'

import Button from '../button/button.comp';
import './form.styles.scss';
import Description from '../description/description.comp';

import check from '../../assets/check.svg';
import warning from '../../assets/warning.svg';
import error from '../../assets/error.svg';



export class Form extends Component {

    state = {
        email: '',
        notification: {
            alt: '',
            src: '',
            level: '',
            message: '',
            visible: false
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.email) {
            fetch(`/api/memberAdd?email=${this.state.email}`)
                .then(res => res.json())
                .then(json => {
                    if (json.status === "subscribed") {
                        this.configureNotification("success");
                    } else if (json.title === "Member Exists") {
                        this.configureNotification("warning");
                    } else {
                        this.configureNotification("danger")
                    };
                    this.showNotification();
                })
                .catch(err => {
                    console.log("error", err)
                });

            this.setState({ email: '' })
        };
    }

    handleEmailChange = e => {
        this.setState({ email: e.target.value.trim() })
    }

    configureNotification = level => {
        const notification = { ... this.state.notification };
        notification.level = level;
        if (level === "success") {
            notification.src = check;
            notification.alt = "check mark";
            notification.message = `Thank you for your newsletter submission. 
                                    You will recieve all my news, offers and 
                                    latest drops`;
        } else if (level === "warning") {
            notification.src = warning;
            notification.alt = "Exclamation Point";
            notification.message = `The email is already registered to the newsletter,
                                    thank you for joining the community.`;
        } else {
            notification.src = error;
            notification.alt = "X Mark";
            notification.message = `There is an issue with your registration.
                                    Please check your email and try again.`;
        }
        this.setState({ notification });
    };

    showNotification = () => {
        const notification = { ... this.state.notification };
        notification.visible = true;
        this.setState({ notification }, () => {
            setTimeout(() => {
                notification.visible = false;
                this.setState({ notification });
            }, 5000);
        });
    };


    render() {
        const { notification } = this.state;
        return (
            <form action="/subscribe" method="POST" onSubmit={this.handleSubmit} showNotification={this.showNotification} configureNotification={this.configureNotification}>
                <Description src={notification.src} alt={notification.alt} message={notification.message} level={notification.level} visible={notification.visible} />
                <input onChange={this.handleEmailChange} type="email" value={this.state.email} id="email" placeholder="Enter your email" />
                <Button type="submit" id="cta">Subscribe</Button>
            </form>
        )
    }
}


export default Form;
