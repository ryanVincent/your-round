import React from 'react';

export default function RoundControl({onRemoveClick, onAddClick, onChange, qty}) {

  const handleInputChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <div>
      <button onClick={onRemoveClick}>-</button><input onChange={handleInputChange} type="number" value={qty} /><button onClick={onAddClick}>+</button>
    </div>
  );
}
