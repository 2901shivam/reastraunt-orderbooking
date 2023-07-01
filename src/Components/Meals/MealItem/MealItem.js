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
    {console.log(props)}
    </div>
    <MealItemForm id={props.id} item={props}/>
   </li>
  )
}

export default MealItem
