import React from "react";
import { Link } from "react-router-dom";
function Cart({ cart }) {
  return (
    <>
      <h1>Your cart</h1>
      <Link to="/">
        <button className="btnhome">Home</button>
      </Link>

      {cart.map((lists) => {
        return (
          <>
            {" "}
            <div>
              <div>
                <h1>{lists.title}</h1>
                <h1>price:${lists.price}</h1>
              </div>
              <div>
                <img
                  className="cartimg"
                  src={lists.thumbnail}
                  width={350}
                  height={250}
                ></img>
              </div>
              <div>
                <h1>{lists.brand}</h1>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
export default Cart;
