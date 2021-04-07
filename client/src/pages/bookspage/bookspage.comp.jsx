import React, { useContext } from 'react'
import PageTitle from '../../components/page-title/page-title.comp';
import { DataContext } from '../../components/Data/DataProvider';
import { Link } from 'react-router-dom';
import './bookspage.styles.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


export default function BooksPage() {
    const [books, setBooks] = useContext(DataContext)
    return (
        <div className="bookpage">
            <PageTitle>BOOKS AVAILABLE</PageTitle>
            <section className="cards container">
                {
                    books.map(book => (
                        <Link to={`/books/${book.title}`} key={book.id} >
                            <ScrollAnimation animateIn="animate__fadeIn" duration="1" animateOnce >
                                <div className="card" key={book.id}>
                                    <div className="card__image" style={{ backgroundImage: `url(${book.image})` }} />
                                    <div className="card__footer">
                                        <div className="card__footer--top">
                                            <h2 className="card__footer--top-title">{book.title}</h2>
                                            <h2 style={{ color: 'crimson' }}>£{book.price}</h2>
                                        </div>

                                        <br></br>
                                        {
                                            book.synopsis.split(' ').slice(0, 24).join(' ') + '...'
                                        }
                                        <p style={{ color: '#0095E0' }}>read more</p>

                                    </div>
                                </div>
                            </ScrollAnimation>
                        </Link>
                    ))
                }
            </section>
        </div>
    )
}


