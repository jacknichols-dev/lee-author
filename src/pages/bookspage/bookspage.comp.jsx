import React from 'react'
import PageTitle from '../../components/page-title/page-title.comp';
import ProductCards from '../../components/product-cards/product-cards.comp';

const BooksPage = () => {
    return (
        <div className="bookpage">
            <PageTitle>BOOKS AVAILABLE</PageTitle>
            <ProductCards />
        </div>
    )
}

export default BooksPage


