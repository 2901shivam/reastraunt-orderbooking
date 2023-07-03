import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";
import CartItemButton from "./CartItemButton";

const Cart = (props) => {
  const cartcnt = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartcnt.removeItem(id);
  };

  const cartItemAddHandeler = (item) => {
    cartcnt.addItem(item);
  };

  //  const amount =cartcnt.items.map((item)=>{
  //     return (totalAmount+=(item.price*item.quantity)).toFixed(2);

  //   })
  const totalAmount = `$${cartcnt.totalAmount.toFixed(2)}`;

  let existingProduct = 0;
  const cart = (
    <ul className={classes[".cart-items"]}>
      {cartcnt.items.map((item) => (
        <CartItemButton
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandeler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cart}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.action}>
        <button className={classes[".button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
