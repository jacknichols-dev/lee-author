import React, { Component } from 'react';
import PageTitle from '../../components/page-title/page-title.comp';
import { BOOK_DATA } from '../../book.data';

import './productpage.styles.scss';
import ProductCard from '../../components/product-cards/product-card/product-card.comp';

class ProductPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: BOOK_DATA
        }

    }

    render() {
        const { books } = this.state
        return (
            <div className="productpage">
                <PageTitle>BOOK DESCRIPTION</PageTitle>
                <div className="productpage__container">
                    {
                        books.map(({ id, image, title, synopsis }) => {
                            <div key={id} className="container">
                                <img src={image} alt={title} />
                                <p>{synopsis}</p>
                                <ProductCard />
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ProductPage;