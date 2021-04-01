import React from 'react';
import PageTitle from '../../components/page-title/page-title.comp';
import AboutSection from '../../components/about-section/about-section.comp';
import AboutReview from '../../components/about-review/about-review.comp';

const About = () => {

    return (
        <>
            <PageTitle>ABOUT THE AUTHOR</PageTitle>
            <AboutSection />
            <AboutReview />
        </>
    )
}

export default About
