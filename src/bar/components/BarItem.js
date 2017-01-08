import React from 'react';
import { Link } from 'react-router';
export default function PubItem({ bar, onViewMenuClick }) {

  const handleClick = () => { console.log(bar) };

  const url = `/bars/${bar.id}/products`;

  return (
    <li className="item">
      <div>
        <h2>{bar.name}</h2>
        <p><span>{bar.address}</span></p>
        <p><span>{bar.distance_to} miles</span></p>
        <Link to={url}>View Drink Menu</Link>
      </div>
    </li>
  )
}
