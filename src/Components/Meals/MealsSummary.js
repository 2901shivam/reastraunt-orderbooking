import React from 'react'
import classes from "./MealsSummary.module.css"

const MealsSummary = (props) => {
  return (
    <div className={classes.summary}>
      
        <h1>Delicious Food,Delivery To You</h1>
        <div className={classes.summaryh2}>
        <h4>Choose Your Favourite meals from broad selection of avilable meals and enjoy a delicious lunch or dinner at home</h4>
        <h4>All our meals are cooked with high quality ingridient ,just  in time and of course by indian chef </h4>
      </div>
    </div>
  )
}

export default MealsSummary
