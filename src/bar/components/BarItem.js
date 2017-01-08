import React from 'react';
import { Link } from 'react-router';
export default function PubItem({ bar, onViewMenuClick }) {

  const handleClick = () => { console.log(bar) };

  const url = `/bars/${bar.id}/products`;

  return (
    <li>
      <div>
        <h2>{bar.name}</h2>
        <p><span>{bar.address}</span><span>{bar.distance_to}</span></p>
        <Link to={url}>View Drink Menu</Link>
      </div>
    </li>
  )
}
