
import { useState } from 'react';


const Star = ({ filled, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: 'pointer',
        color: filled ? 'gold' : 'gray',
        fontSize: '24px',
      }}
    >
      ★
    </span>
  );
}
const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);
    
    return (
        <div>
        {[...Array(totalStars)].map((_, index) => (
            <Star
            key={index}
            filled={index < rating}
            onClick={() => setRating(index + 1)}
            />
        ))}
        <p>Your rating: {rating} out of {totalStars}</p>
        </div>
    );
}
    
export default StarRating;