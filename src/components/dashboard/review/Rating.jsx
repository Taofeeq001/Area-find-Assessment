import React from 'react'
import { Rating } from 'react-simple-star-rating'


const Rate = ({handleRating, rating}) => {
    return (
        <div className='flex flex-row'>
            <Rating onClick={handleRating} ratingValue={rating} size={20} />
        </div>
    )
}

export default Rate