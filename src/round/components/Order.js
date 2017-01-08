import React from 'react';
import OrderItem from './OrderItem';

export default function Round({order}) {
  return (
    <ul>
      {Object.keys(order).map(order => <OrderItem order={order} />)}
    </ul>
  )
}
