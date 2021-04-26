import React, { useContext, useState } from 'react';
import PageTitle from '../../components/page-title/page-title.comp';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../components/Data/DataProvider';
import Button from '../../components/button/button.comp';
import * as FaIcons from 'react-icons/fa';

import './productpage.styles.scss';

export default function ProductPage() {

    const { title } = useParams();
    const [books, setBooks] = useContext(DataContext)

    const details = books.filter((book, index) => {
        return book.title == title
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
                                    <br style={{ borderTop: '1px solid black' }} />
                                    <h3>Synopsis</h3>
                                    <p className="book__left--synopsis">{book.synopsis}</p>
                                </div>

                                <div className="book__desc">
                                    <h1 className="book__desc--title">{book.title}</h1>


                                    <div className="book__desc--info-container">
                                        <div className="book__desc--info">
                                            <p>Print length: <span>{book.printLength} pages</span></p>
                                            <p>Publication date: <span>{book.publicationDate}</span></p>
                                            <p>Language: <span>{book.language}</span></p>
                                        </div>
                                        <div className="book__desc--price">
                                            <p>Paperback</p>
                                            <h1>£{book.price}</h1>
                                        </div>
                                    </div>
                                    <a href={book.link} rel="noopener" target="_blank">
                                        <Button className="btn-center"
                                            link={book.link} target="_blank">
                                            Buy at Amazon
                                        <FaIcons.FaAmazon
                                                size="30"
                                                style={{ marginLeft: '1.5rem' }}
                                            />
                                        </Button>
                                    </a>

                                    <div className="book__desc--availability">
                                        Available in:
                                        <div className="book__desc--items-container">
                                            {
                                                book.availability.map((item, index) => (
                                                    <div className="book__desc--item" key={index} >
                                                        <img src={item.img} alt="" width="50" />
                                                        {item.title}
                                                    </div>
                                                ))
                                            }
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}