import { useState } from "react";
function Counter() {
  let [count, setCounter] = useState(0);
  const increment = () => {
    setCounter(count + 1);
  };
  const decrement = () => {
    setCounter(count - 1);
  };
  console.log("Rendered Counter");
  return (
    <div className="flex gap-2">
      <div className="w-1/2 h-1/4">
        <h1 className="font-semibold text-4xl">Cart</h1>
        <div className="flex grid-cols-3">
          <img
            className="w-2 h-3"
            src="data:image/jpeg;base64,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"
          ></img>
          <p>Replaced Fit T-shirt</p>
          <p className="font-semibold">$12.99</p>
          <p className="text-green">Stock</p>
          <p>XL 2</p>
          <p>Blue 2</p>
          <div className="flex gap-2">
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
                d="M5 12h14"
              />
            </svg>
            <p>1</p>
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
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </span>
          <span>Save</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span>Delete</span>
        </div>
        <div className="flex grid-cols-3">
          <img
            className="w-2 h-4"
            src="data:image/jpeg;base64,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"
          ></img>
          <p>Nylon Sports Cap</p>
          <p className="text-4xl">$14.99</p>
          <p>Available in 2 colors</p>
          <div className="flex gap-2">
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
                d="M5 12h14"
              />
            </svg>
            <p>1</p>
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
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </span>
          <span>Save</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span>Delete</span>
        </div>
        <div className="flex grid-cols-3">
          <img
            className="w-2 h-4"
            src="data:image/jpeg;base64,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"
          ></img>
          <p>Shoe</p>
          <p className="text-4xl">$34.99</p>
          <p className="text-red">Out in stock</p>
          <div className="flex gap-2">
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
                d="M5 12h14"
              />
            </svg>
            <p>1</p>
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
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </span>
          <span>Save</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span>Delete</span>
        </div>
        <div className="flex grid-cols-3">
          <img
            className="w-2 h-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVy6Lt5_j25HXFfmp5VYULfAzO34x-4b_Xg&s"
          ></img>
          <p>Fit Suit Vest</p>
          <p className="text-4xl">$12.00</p>
          <p className="text-green">in Stock</p>
          <p>XL 2</p>
          <p>Yellow 2</p>
          <div className="flex gap-2">
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
                d="M5 12h14"
              />
            </svg>
            <p>1</p>
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
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </span>
          <span>Save</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span>Delete</span>
        </div>
      </div>
      <div className="w-1/2 h-1/4">
        <p>Delivery</p>
        <span>
          <button className="bg-white font-bold">Free</button>
        </span>
        <span>Express $9.99</span>
        <p className="text-gray">Delivery Date:May 15 2024</p>
        <div className="flex gap-5">
          <p>Promocode</p>
          <button className="bg-white font-bold">Apply</button>
        </div>
        <p className="text-gray">20% off discount</p>
        <div className="flex grid-cols-2 gap-6">
          <h1>Subtotal</h1>
          <h1>$80.00</h1>
          <p>Discount</p>
          <p>-80%</p>
          <p>Delivery</p>
          <p>$8.00</p>
          <p>Tax</p>
          <p>-$14.00</p>
          <p className="text-4xl">Total</p>
          <p className="text-4xl">$78.78</p>
        </div>
        <button className="bg-blue radius-2 text-white">
          Proceed to checkout
        </button>
        <button className="bg-white radius-2 text-black">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
export default Counter;
