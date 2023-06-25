import React from 'react'
import classes from "./HeadercartButton.module.css"
import CartIcon from '../Cart/CartIcon'

const HeaderCarButton = (props) => {
  return (
    <button className={classes.button }>
    <span className={classes.icon}><CartIcon/></span>
    <span>YourCart</span>
    <span>0</span>
      
    </button>
  )
}

export default HeaderCarButton
