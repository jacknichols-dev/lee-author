import React, { Component } from 'react'

import Input from '../input/input.comp';
import Button from '../button/button.comp';

export class Form extends Component {

    state = {
        email: ''
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.email) {
            fetch(`/api/memberAdd?email=${this.state.email}`)
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }

        this.setState({
            email: ''
        })
    }

    handleEmailChange = e => {
        this.setState({ email: e.target.value.trim() })
    }


    render() {
        return (
            <form action="/subscribe" method="POST" onSubmit={this.handleSubmit}>

                <input onChange={this.handleEmailChange} type="email" value={this.state.email} id="email" placeholder="Enter your email" />

                <Button type="submit" id="cta">Subscribe</Button>

            </form>
        )
    }
}


export default Form;
