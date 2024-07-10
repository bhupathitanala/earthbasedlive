import React from 'react';
import styled from 'styled-components';
import "./rating.css";

const StarContainer = styled.div`
  --percent: calc(${props => props.rating} / 5 * 100%);
  display: inline-block;
  font-size: ${props => props.size || '24px'};
  font-family: Times; /* make sure ★ appears correctly */
  line-height: 1;
`;

const StarRating = ({ rating, size }) => {
  return (
    <StarContainer rating={rating} size={size} aria-label={`Rating of this product is ${rating} out of 5.`}>
      <span className="Stars">
        {Array.from({ length: 5 }, (_, index) => {
          const starClass = index + 1 <= Math.floor(rating) ? "filled" : index < Math.ceil(rating) ? "partially-filled" : "unfilled";
          return <span key={index} className={`Star ${starClass}`}>★</span>;
        })}
      </span>
    </StarContainer>
  );
};

export default StarRating;
