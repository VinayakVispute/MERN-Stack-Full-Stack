import React, { useState } from 'react'
import Card from './Card'

const Testimonial = ({ reviews }) => {
    const [individualReviews, setIndividualReviews] = useState(0)
    function nextClickHandler() {
        let tempNumber = (individualReviews + 1) % (reviews.length);
        console.log(reviews[tempNumber].id)
        setIndividualReviews(tempNumber);
    }
    function previousClickHandler() {

        let tempNumber = (individualReviews - 1 + reviews.length) % (reviews.length);
        setIndividualReviews(tempNumber);
    }

    function supriseClickHandler() {
        let tempNumber = Math.floor(Math.random() * reviews.length);
        console.log(reviews[tempNumber].id);
        setIndividualReviews(tempNumber);
    }

    return (
        <div>
            <Card reviews={reviews[individualReviews]} previousClickHandler={previousClickHandler} nextClickHandler={nextClickHandler} supriseClickHandler={supriseClickHandler} />
        </div>
    )
}

export default Testimonial
