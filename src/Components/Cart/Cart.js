import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";

const Cart = (props) => {
  const cartcnt=useContext(CartContext);

  var totalAmount=0;
  
 const amount =cartcnt.items.map((item)=>{
    return (totalAmount+=(item.price*item.quantity)).toFixed(2);

  })
  let existingProduct=0;
  const cart =
  <ul className={classes['.cart-items']}>{cartcnt.items.map(
    (item) =>(<li>{item.price} {item.des} {item.quantity}</li>

   
))}
 
 


</ul>
  return (
    <Modal onClose={props.onClose}>
      {cart}
      <div className={classes.total}>
        <span>${totalAmount}</span>
        
      </div>
      <div className={classes.action}>
        <button className={classes[".button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      </Modal>

  );
};

export default Cart;
