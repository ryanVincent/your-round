import React from 'react';

export default function Orderitem({ orderItem }) {
  return (
    <li><span>{orderItem.qty}</span> x <span>{orderItem.product.name} @ {orderItem.product.currentPrice} : {orderItem.product.currentPrice * orderItem.qty}</span></li>
  );
}
