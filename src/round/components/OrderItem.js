import React from 'react';

export default function Orderitem({ orderItem }) {
  return (
    <li><span>{orderItem.qty}</span> x <span>{orderItem.name} @ {orderItem.price} : {orderItem.price * orderItem.qty}</span></li>
  );
}
