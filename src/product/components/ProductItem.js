import React from 'react';
import RoundControl from './RoundControl';

export default function ProductItem({ product, onRemoveClick, onAddClick, onChange, round }) {

  const handleRemoveClick = () => { onRemoveClick(product) };
  const handleAddClick = () => { onAddClick(product) };
  const handleOnChange = (qty) => { onChange(product, qty) }

  const qty = round[product.id] ? round[product.id].qty : 0;

  return (
    <li>
      <h3>{product.name}</h3>
      <img src={product.imageUrl} />
      <p>{product.desc}</p>
      <RoundControl onRemoveClick={handleRemoveClick} onAddClick={handleAddClick} onChange={handleOnChange} qty={qty} />
    </li>
  )
}
