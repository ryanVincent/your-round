import React from 'react';

export default function SearchBar({ onChange }) {

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    onChange(searchTerm);
  }
  return (
    <input type="search" onChange={handleChange} />
  )
}
