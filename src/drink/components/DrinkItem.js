import React from 'react';
import RoundControl from './RoundControl';

export default function DrinkItem({ drink }) {
  return (
    <li>
      <h3>{drink.name}</h3>
      <img src={drink.thumb} />
      <p>{drink.desc}</p>
      <span>{drink.price}</span>
      <span>{drink.measure}</span>
      <RoundControl />
    </li>
  )
}
