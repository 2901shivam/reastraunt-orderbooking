import React, { useContext } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
import CartContext from '../../../Store/CartContext'

const MealItemForm = (props) => {
  const cartc=useContext(CartContext);
  const onChangeHandler=(event)=>{
    event.preventDefault();
    const quantity=document.getElementById('amount'+props.id).value;
    cartc.addItem({...props.item,quantity:quantity})
    // console.log(event.target)
    // console.log("Click on me")
  }
  return (
    
    <form className={classes.form}>
    {console.log(cartc)}
        <Input lab="Amount" input={{
            id:'amount'+props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button onClick={onChangeHandler}>+ADD</button>
    </form>
      

  )
}

export default MealItemForm
