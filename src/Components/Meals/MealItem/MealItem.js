import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/CartContext';

const MealItem = (props) => {
    const cartCtx=useContext(CartContext)
    const price=`$${props.price.toFixed(2)}`;

    const onAddToChangeHandeler=(amount)=>{
       cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
       })
    }
  return (
   <li className={classes.meal}>
    <div><h3>{props.name}</h3>
    <div className={classes.description}>{props.des}</div>
    <div className={classes.price}>{price}</div>
    {console.log(props)}
    </div>
    <MealItemForm onAddToCart={onAddToChangeHandeler}/>
   </li>
  )
}

export default MealItem
