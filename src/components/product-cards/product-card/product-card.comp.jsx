import React from 'react';
import './product-card.styles.scss';

const ProductCard = ({ title, author, image, price }) => (


    <div className="card">
        <div className="card__image" style={{ backgroundImage: `url(${image})` }} />
        <div className="card__footer">
            <div className="card__footer--top">
                <h2>{title}</h2>
                <h2 style={{ color: '#0095E0' }}>£ {price}</h2>
            </div>
            <p>{author}</p>
        </div>
    </div>

);

export default ProductCard;
