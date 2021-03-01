import React, { Component } from 'react'
import BOOK_DATA from '../../book.data';

export default class BooksPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: BOOK_DATA
        }
    }

    render() {
        return (
            <div className="container">
                Books Page
            </div>
        )
    }
}
