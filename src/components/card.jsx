import { Link } from "react-router-dom";
import React from "react";
function Card(props) {
  return (
    <Link to={`/shoppings/${props.shopping.id}`}>
      <div className="min-w-56 rounded-lg shadow-lg p-3 h-full">
        <div className="flex flex-col gap-4 h-full">
          <div>
            <img
              className="rounded-lg flex-grow object-cover"
              src={props.shopping.image}
              name={props.shopping.name}
              amount={props.shopping.amount}
              alt="Shirt"
            />
            <div className="flex gap-4 grid-cols-3">
              <h2 className="font-bold">{props.shopping.name}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <p className="text-orange">{props.shopping.amount}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Card;
