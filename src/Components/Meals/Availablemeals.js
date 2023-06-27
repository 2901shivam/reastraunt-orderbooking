import React from 'react'
import classes from "./Availablemeals.module.css"
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const meals=[{
    id:"m1",
    item:"sushi",
    des:"finest fish and veggies",
    price:22.99

},
{   id:"m2",
    item:"schnitzed",
    des:"A german speciality",
    price:16.50 
},
{   id:"m3",
    item:"Barbeque Burgers",
    des:"American,raw,meaty",
    price:12.99
}
]

const Availablemeals = (props) => {
 const mealsList=meals.map((meal)=> <li><MealItem key={meal.id} item={meal.item} des={meal.des} price={meal.price}/></li>);
  return (


    <div className={classes.meals}>
    <Card>
      <ul>
        {mealsList}<hr/>
      </ul>
      </Card>
    </div>
  )
}

export default Availablemeals
