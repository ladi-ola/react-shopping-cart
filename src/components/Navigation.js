import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../contexts/CartContext";

const Navigation = () => {
  // const cart = useContext(CartContext);
  // debugger
  return (
    <CartContext.Consumer>
      {({cart}) => (
        <div className="navigation">
          <NavLink to="/">Products</NavLink>
          <NavLink to="/cart">
            Cart <span>{cart.length}</span>
          </NavLink>
        </div>
      )}
    </CartContext.Consumer>
  );
};

export default Navigation;
