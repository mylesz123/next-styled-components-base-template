import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(<FontAwesomeIcon key={`rating-key${i}`} className="fa-2x star" icon={faStar} />);
    } else {
      totalRating.push(
        totalRating.push(<FontAwesomeIcon key={`rating-key${i}`} className="fa-2x star-o" icon={faStar} />)
      );
    }
  }

  return <div className="rating">{totalRating}</div>;
};

export default Rating;
