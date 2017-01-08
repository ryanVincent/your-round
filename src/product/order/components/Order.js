import React from 'react';
import OrderItem from './OrderItem';

function calculateSubtotal(order) {
  return Object.keys(order).reduce((total, orderId) => {
    return total + order[orderId].qty * order[orderId].product.currentPrice;
  }, 0);
}

export default function Order({order, onViewDrinksMenuClick}) {
  return (
    <div>
      <ul>
        {Object.keys(order).map(orderId => <OrderItem orderItem={order[orderId]} />)}
      </ul>
      <p>subtotal: £{calculateSubtotal(order)}</p>
      <button onClick={onViewDrinksMenuClick}>View Drinks Menu</button>
    </div>
  );
}
