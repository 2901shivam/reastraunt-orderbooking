import { useContext,useState,useEffect } from 'react'
import React from 'react'
import classes from "./HeadercartButton.module.css"
import CartIcon from '../Cart/CartIcon'
import {CartContext} from '../../Store/cart-context'


const HeaderCarButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted]= useState(false)

 const cartCtx= useContext(CartContext)
 const {items} = cartCtx

 const numberOfCartItem=items.reduce((curNumber,item)=>{
  return curNumber+item.amount;
 },0);

 const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

 useEffect(()=>{
  if(items.length===0){
    return;
  }
  setBtnIsHighlighted(true);

  const timer= setTimeout(()=>{
    setBtnIsHighlighted(false)
  },300)

  return (
    ()=>{
      clearTimeout(timer);
    }
  )

 },[items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
    <span className={classes.icon}><CartIcon/></span>
    <span>YourCart</span>
    <span className={classes.badge}>{numberOfCartItem}</span>
      
    </button>
  )
}

export default HeaderCarButton
