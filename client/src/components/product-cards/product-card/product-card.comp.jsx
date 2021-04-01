import React from 'react';
import './product-card.styles.scss';

const ProductCard = ({ synopsis, title, author, image, price }) => (



    <div className="card" >
        <div className="card__image" style={{ backgroundImage: `url(${image})` }} />
        <div className="card__footer">
            <div className="card__footer--top">
                <h2>{title}</h2>
                <h2 style={{ color: '#0095E0' }}>£ {price}</h2>
            </div>
            <p>{author}</p>
            <br></br>

            {
                synopsis.split(' ').slice(0, 24).join(' ') + '...'
            }
            <p style={{ color: '#0095E0' }}>read more</p>

        </div>
    </div>

);

export default ProductCard;
