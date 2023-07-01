import React, { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const[items,updateItems]=useState([])
    const addCartitemToHandler=(item)=>{
        updateItems([...items,item]);
    };
    const removeCartitemToHandler=(id)=>{};

    const cartItem=({
        items:items,
        totalAmount:0,
        addItem: addCartitemToHandler,
        removeItem:removeCartitemToHandler,

    })
  return (
    <CartContext.Provider value={cartItem}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
