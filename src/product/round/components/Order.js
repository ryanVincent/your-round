import React from 'react';
import OrderItem from './OrderItem';

export default function Order({order, onViewDrinksMenuClick}) {
  return (
    <div>
      <ul>
        {Object.keys(order).map(orderId => <OrderItem orderItem={order[orderId]} />)}
      </ul>
      <button onClick={onViewDrinksMenuClick}>View Drinks Menu</button>
    </div>
  )
}
