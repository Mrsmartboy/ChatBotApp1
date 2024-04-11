import React from 'react';
import './StressCards.css';

const StressCards = ({ eachItem }) => {
  return (
    <li className='card'>
      <img src={eachItem.imageUrl} alt={eachItem.description} className='card-image' />
      <div className='card-content'>
        <h1 className='card-head'>{eachItem.topic}</h1>
        <p className='card-description'>{eachItem.description}</p>
      </div>
    </li>
  );
};

export default React.memo(StressCards);
