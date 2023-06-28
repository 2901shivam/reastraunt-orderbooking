import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cart =
  <ul className={classes['.cart-items']}>{[{ id: "1", name: "shusi", amount: 2, price: 16.25 }].map(
    (item) =>(<li>{item.name}</li>
))}


</ul>
  return (
    <Modal onClose={props.onClose}>
      {cart}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33.25</span>
      </div>
      <div className={classes.action}>
        <button className={classes[".button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      </Modal>

  );
};

export default Cart;
