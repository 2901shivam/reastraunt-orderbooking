import React, { useContext, useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
import CartContext from '../../../Store/CartContext'

const MealItemForm = (props) => {
  const amountInputRef=useRef();
  const[amountIsValid,setAmountIsValid]=useState(true);
  // const cartc=useContext(CartContext);
  const onChangeHandler=(event)=>{
    event.preventDefault();
    // const quantity=document.getElementById('amount'+props.id).value;
    // cartc.addItem({...props.item,quantity:quantity})
    // console.log(event.target)
    // console.log("Click on me")
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=+enteredAmount;

    if(enteredAmount.length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
      setAmountIsValid(false)
      return ;
    }
    props.onAddToCart(enteredAmountNumber)
  }
  return (
    
    <form className={classes.form} onSubmit={onChangeHandler}>
    
        <Input 
        ref={amountInputRef}
        lab="Amount" input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button >+ADD</button>
        {!amountIsValid &&<p>please enter a valid amount</p>}
    </form>
      

  )
}

export default MealItemForm
