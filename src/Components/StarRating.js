import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating, totalStars }) => {
  return (
    <div className='flex flex-row'>      
        {[...Array(totalStars)].map((_, index) => {
            const starValue = index + 1;
            return (
            <span key={index}>            
                {starValue <= rating ? <FaStar className='text-[#2C9644]' /> : <FaStar className='text-[#E8EAE9]' />}
            </span>
            );
        })}
    </div>  
    );
};
export default StarRating;