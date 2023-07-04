import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs'
const Card = (props) => {
    let reviews = props.reviews;
    let nextClickHandler = props.nextClickHandler;
    let previousClickHandler = props.previousClickHandler;
    let supriseClickHandler = props.supriseClickHandler;

    return (
        <>
            <div>
                <img src={reviews.image} />
            </div>

            <div>
                <p>{reviews.name}</p>
            </div>

            <div>
                <p>{reviews.job}</p>
            </div>
            <div>
                <FaQuoteLeft color='purple' />
            </div>
            <div>
                <p>{reviews.text}</p>
            </div>
            <div>
                <FaQuoteRight color='purple' />
            </div>
            <div>
                <button onClick={previousClickHandler}>
                    <BsChevronBarLeft color='purple' />
                </button>
                <button onClick={nextClickHandler}>
                    <BsChevronBarRight color='purple' />
                </button>
            </div>
            <div>
                <button onClick={supriseClickHandler}>Suprise Me !!</button>
            </div>
        </>
    )
}

export default Card
