import React, { useContext, useState } from 'react';
import PageTitle from '../../components/page-title/page-title.comp';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../components/Data/DataProvider';
import Button from '../../components/button/button.comp';

import './productpage.styles.scss';

export default function ProductPage() {

    const { id } = useParams();
    const [books, setBooks] = useContext(DataContext)

    const details = books.filter((book, index) => {
        return book.id == id
    })

    return (
        <>
            <div className="productpage">
                <PageTitle>BOOK DESCRIPTION</PageTitle>
                <div className="productpage__container container">
                    {
                        details.map(book => (
                            <div className="book" key={book.id}>

                                <div className="book__left">
                                    <div className="book__left--img" style={{ backgroundImage: `url(${book.image})` }} />
                                </div>

                                <div className="book__desc">
                                    <h1 className="book__desc--title">{book.title}</h1>
                                    <h3 className="book__desc--author">{book.author}</h3>
                                    <h3 style={{ color: '#0095E0' }}>Synopsis</h3>
                                    <p className="book__desc--synopsis">{book.synopsis}</p>

                                    <div className="book__desc--info-container">
                                        <div className="book__desc--info">
                                            <p>Print length: <span>{book.printLength} pages</span></p>
                                            <p>Publication date: <span>{book.publicationDate}</span></p>
                                            <p>Language: <span>{book.language}</span></p>
                                        </div>
                                        <div className="book__desc--price">
                                            <h1>£{book.price}</h1>
                                        </div>
                                    </div>
                                    <Button className="btn-center" link="https://www.amazon.co.uk/Mr-Lucky-Trentbridge-Tales-Book/dp/1871407397/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=" target="_blank" >Amazon page</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}