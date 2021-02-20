import React from "react";
import { Link } from 'react-router-dom';

export default function Meal(props) {
  const { meal } = props;
  return (
    <div>
      <div key={meal._id} className="card">
        <Link to={`/meals/${meal._id}`}>
          <img className="medium" src={meal.image} alt={meal.name} />
        </Link>
        <div className="card-body">
          <Link to={`/meals/${meal._id}`}>
            <h2>{meal.name}</h2>
          </Link>

          <div className="price">${meal.price}</div>
        </div>
      </div>
    </div>
  );
}
