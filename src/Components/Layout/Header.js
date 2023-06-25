import React, { Fragment } from "react";

import mealimages from  "../../assest/meals.jpg"

import classes from "./Header.module.css" 
import HeaderCarButton from "./HeaderCarButton";

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCarButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealimages}/>
      </div>
    </div>
  );
};

export default Header;
