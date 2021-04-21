import React, { createContext, useState } from 'react';




export const DataContext = createContext();

export const DataProvider = (props) => {
    const [books, setBooks] = useState([
        {
            id: 1,
            image: '/images/lee-book-mrLucky.jpg',
            title: 'Mr. Lucky',
            price: 7.99,
            author: 'Lee Wood',
            language: 'English',
            publicationDate: '5 April 2017',
            printLength: 188,
            synopsis: `A single instant shattered Detective James Sheldon's perfect life. Eighteen months later, he is begging for loose change on the streets, and contemplating suicide.
                    In a strange twist of fate, he wins a record- breaking 168 million lottery. But what should be a life - changing dream becomes a heart - pumping nightmare. Suddenly James finds himself thrust into a dangerous game where he's forced to confront drug dealers, crime bosses out to destroy him, and the personal demons that keep him up at night.
                    Can he come to terms with his new wealth and drag himself out of poverty, or will the surplus of cash become a death warrant / noose around his neck / draw bounty hunters and dark alley villains out of their hovels?`,
            availability: [
                {
                    img: '/images/kindle-icon.png',
                    title: "Kindle Edition"
                },
                {
                    img: '/images/paperback-icon.png',
                    title: "Paperback"
                },
                {
                    img: '/images/audible-icon.png',
                    title: "Audible book"
                },
            ],
            link: 'https://www.amazon.co.uk/gp/product/B06Y3C9SVV/ref=dbs_a_def_rwt_bibl_vppi_i1'

        },
        {
            id: 2,
            image: '/images/lee-book-luckyBreak.jpg',
            title: 'Lucky Break',
            price: 7.99,
            author: 'Lee Wood',
            language: 'English',
            publicationDate: '18 May 2018',
            printLength: 240,
            synopsis: `It sells for $5.4 million at Sotheby's. Now he keeps finding valuable items, which doesn't go unnoticed by his competitors. Three of them become curious about his secret source and decide to follow him with disastrous consequences.`,
            availability: [
                {
                    img: '/images/kindle-icon.png',
                    title: "Kindle Edition"
                },
                {
                    img: '/images/paperback-icon.png',
                    title: "Paperback"
                },
                {
                    img: '/images/audible-icon.png',
                    title: "Audible book"
                },
            ],
            link: 'https://www.amazon.co.uk/gp/product/B07BCLJCJN/ref=dbs_a_def_rwt_bibl_vppi_i6'
        },
        {
            id: 3,
            image: '/images/lee-book-deadLucky.jpg',
            title: 'Dead Lucky',
            price: 7.99,
            author: 'Lee Wood',
            language: 'English',
            publicationDate: '21 Nov. 2018',
            printLength: 220,
            synopsis: `The drug addicts are causing havoc for the police and the community and making the centre of Trentbridge a no-go zone. It's all down to a new illegal substance called ‘Monkey Dust’ that is far more powerful than Heroin, yet sells for a fraction of the price.
            The police believe it’s being supplied by the O’Connor’s. A local criminal family who never let anything or anyone get in their way. But unless they can prove it the entire town is in danger of being brought to its knees.
            If they can’t stop these criminals then maybe there’s someone who can?
            Roger Maynard and the O’Connor’s have crossed paths before. All he wants is justice. But just how far is he prepared to go? And does he really stand a chance against a hardened criminal family who has spent years outsmarting the police?
            It’s good versus evil and the odds are stacked against him - unless he’s dead lucky!`,
            availability: [
                {
                    img: '/images/kindle-icon.png',
                    title: "Kindle Edition"
                },
                {
                    img: '/images/paperback-icon.png',
                    title: "Paperback"
                },
            ],
            link: 'https://www.amazon.co.uk/gp/product/B07KS1HYK5/ref=dbs_a_def_rwt_bibl_vppi_i5'
        },
        {
            id: 4,
            image: '/images/lee-book-luckyStars.jpg',
            title: 'Lucky Stars',
            price: 6.99,
            author: 'Lee Wood',
            language: 'English',
            publicationDate: '21 Nov. 2018',
            printLength: 220,
            synopsis: `When identical twins Erica and Leona Mitten emerge as the stars of a reality TV show they think their dreams have come true.
            Then they are seized by a masked gang and their family receive a phone call. But the kidnappers don’t want money. The ransom demand is for something far worse and the deadline is 48 hours
            “The most terrifying kidnap plot you will ever read” `,
            availability: [
                {
                    img: '/images/kindle-icon.png',
                    title: "Kindle Edition"
                },
                {
                    img: '/images/paperback-icon.png',
                    title: "Paperback"
                },
                {
                    img: '/images/audible-icon.png',
                    title: "Audible book"
                },
            ],
            link: 'https://www.amazon.co.uk/gp/product/B083M6LVF4/ref=dbs_a_def_rwt_bibl_vppi_i3'
        },
        {
            id: 5,
            image: '/images/lee-book-boxSet.jpg',
            title: 'Lucky Series',
            price: 12.99,
            author: 'Lee Wood',
            language: 'English',
            publicationDate: '21 Nov. 2018',
            printLength: 220,
            synopsis: `It sells for $5.4 million at Sotheby's. Now he keeps finding valuable items, which doesn't go unnoticed by his competitors. Three of them become curious about his secret source and decide to follow him with disastrous consequences.`,
            availability: [
                {
                    img: '/images/kindle-icon.png',
                    title: "Kindle Edition"
                },
                {
                    img: '/images/paperback-icon.png',
                    title: "Paperback"
                },
                {
                    img: '/images/audible-icon.png',
                    title: "Audible book"
                },
            ],
            link: 'https://www.amazon.co.uk/gp/product/B087QH3KS9/ref=dbs_a_def_rwt_bibl_vppi_i0'
        },
    ])

    return (
        <DataContext.Provider value={[books, setBooks]}>
            {props.children}
        </DataContext.Provider>
    )
}

