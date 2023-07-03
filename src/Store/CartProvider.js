import React, { useReducer } from 'react'
import CartContext from './CartContext'

const defaultCartstate={
  items:[],
  totalAmount:0,
}

const cartReducer=(state,action)=>{
  if(action.type==='ADD'){
    // const updateItems=state.items.concat(action.item);
    const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount;
    const existingitem=state.items.findIndex(item=>item.id===action.item.id)
    const existingCartitem=state.items[existingitem];
    // let updateItem;
    let updateItems;

    if(existingCartitem){
      const updateItem={
        ...existingitem,
        amount:existingCartitem.amount+action.item.amount
      }
      updateItems=[...state.items]
      updateItem[existingitem]=updateItem
    }
    else{
      // updateItem={...state.action};
      updateItems=state.items.concat(action.item);
    }
    return {
      items:updateItems,
      totalAmount:updatedTotalAmount
    }
  }
  if(action.type==='Remove'){
    const existingCartIndexitem=state.items.findIndex(item=>item.id===action.id)
  
  const existingitem=state.items[existingCartIndexitem];
  const updatedTotalAmount=state.totalAmount-existingitem.price;

  let updateItem;

  if(existingitem.amount===1){
    updateItem=state.items.filter(item=>item.id!==action.id)
  }
  else{
    const updateItems={...existingitem,amount:existingitem.amount-1}
    updateItem=[...state.items];
    updateItem[existingCartIndexitem]=updateItems;
  }
  return{
    items:updateItem,
    totalAmount:updatedTotalAmount
  }
  }
  return defaultCartstate;
}

const CartProvider = (props) => {

  const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartstate);

    // const[items,updateItems]=useState([])
    const addCartitemToHandler=(item)=>{
    //     updateItems([...items,item]);
        dispatchCartAction({type:'ADD',item:item})
     };
    const removeCartitemToHandler=(id)=>{
      dispatchCartAction({type:'Remove',id:id})
    };

    const cartItem=({
        items:cartState.items,
        totalAmount:cartState.totalAmount,
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
