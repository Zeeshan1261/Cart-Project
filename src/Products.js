import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Product({ items, myCart }) {
  return (
    <>
      <h1>
        <Link to="/cart">
          <button>
            {" "}
            Cart
            <FaShoppingCart />
          </button>
        </Link>
      </h1>
      {items.map((lists) => {
        return (
          <div className="main">
            <div className="img">
              <img src={lists.thumbnail} width={350} height={250}></img>
            </div>
            <div className="products">
              <h1>{lists.description}</h1>
              <h1>{lists.title}</h1>;<h1>{lists.brand}</h1>;
              <p>price: ${lists.price}</p>
              <h1>
                <button
                  className="cart"
                  onClick={() => {
                    myCart(lists);
                  }}
                >
                  Add to Cart
                </button>
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Product;
