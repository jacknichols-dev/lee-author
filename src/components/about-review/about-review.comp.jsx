import React from 'react';
import './about-review.styles.scss';
import Quote from '../../assets/quote.svg';

const AboutReview = () => {
    return (
        <div className="about-rev">
            <div className="about-rev__content container">

                <img src={Quote} alt="quotation mark" className="about-rev__img 1" />
                <p className="about-rev__quote">
                    “Most of us have fantasised at some point in our life about what we would do if we won a lottery.
                    Lee Wood provides us with a surprising yet believable scenario set in suburban UK and featuring
                    contemporary social issues including drugs, prostitution, corruption, homelessness and the plight
                    of the working class.”
                 </p>
                <h4>- MIKE CHAMP</h4>
                <img src={Quote} alt="quotation mark" className="about-rev__img 2" />
            </div>
        </div>
    )
}

export default AboutReview
