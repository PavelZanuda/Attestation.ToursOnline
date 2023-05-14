import React from 'react';
import './Card.css';

export const Card = ({ title, cost, imgPath }) => {
  return (
    <div className='card_wrapper'>
      <p className='title'>{title}</p>
      <img src={imgPath} alt='card-img' className='card_img' />
      <p className='cost'>Цена: {cost}</p>
      <button className='card_button'>Забронировать</button>
    </div>
  );
};
