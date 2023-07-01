import { useContext } from 'react'
import React from 'react'
import classes from "./HeadercartButton.module.css"
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../Store/CartContext'


const HeaderCarButton = (props) => {
 const cartCtx= useContext(CartContext)
 let quantity=0
 cartCtx.items.forEach((item)=>{
    quantity=quantity+Number(item.quantity);
 })

 const numberOfCartItem=cartCtx.items.reduce((curNumber,item)=>{
  return curNumber+item.amount;
 },0);

  return (
    <button className={classes.button } onClick={props.onClick}>
    <span className={classes.icon}><CartIcon/></span>
    <span>YourCart</span>
    <span>{quantity}</span>
      
    </button>
  )
}

export default HeaderCarButton
