import React from 'react';

const reviewCard = ({review}) => {
    return (
        <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{review.name}</h2>
          <p>Rating: {review.rating}</p>          
          <p>{review.comment}</p>          
        </div>
      </div>
    </div>
    );
};

export default reviewCard;