import React, { Component } from 'react'
import './product-cards.styles.scss';
import { BOOK_DATA } from '../../book.data.js';
import { Link } from 'react-router-dom';

import ProductCard from './product-card/product-card.comp';

export default class ProductCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: BOOK_DATA
        }
    }

    render() {
        const { books } = this.state;
        return (
            <div className="cards container">
                {books.map(({ id, ...otherBooksProps }) => (
                    <Link to="/book">
                        <ProductCard key={id} {...otherBooksProps} />
                    </Link>
                ))}
            </div>
        )
    }
}

