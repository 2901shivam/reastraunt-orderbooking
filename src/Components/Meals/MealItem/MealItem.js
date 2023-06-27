import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const price=`$${props.price.toFixed(2)}`;
  return (
   <li className={classes.meal}>
    <div><h3>{props.item}</h3>
    <div className={classes.description}>{props.des}</div>
    <div className={classes.price}>{price}</div>
    </div>
    <MealItemForm></MealItemForm>
   </li>
  )
}

export default MealItem
