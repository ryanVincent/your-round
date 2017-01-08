import React from 'react';

export default function Orderitem({ orderItem }) {
  return (
    <li className="item order-item"><span>{orderItem.qty}</span> x <span>{orderItem.product.name} @ £{orderItem.product.currentPrice} : £{orderItem.product.currentPrice * orderItem.qty}</span></li>
  );
}
