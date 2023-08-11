import React from 'react'
import classes from "./Availablemeals.module.css"
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const meals=[{
    id:"m1",
    name:"sushi",
    des:"finest fish and veggies",
    price:22.99

},
{   id:"m2",
    name:"schnitzed",
    des:"A german speciality",
    price:16.50 
},
{   id:"m3",
    name:"Barbeque Burgers",
    des:"American,raw,meaty",
    price:12.99
},
{   id:"m4",
    name:"Biryani",
    des:"tatsy Spicy Lucknawi Biryani..",
    price:999.99
}
]

const Availablemeals = (props) => {
 const mealsList=meals.map((meal)=> <li><MealItem key={meal.id} id={meal.id} name={meal.name} des={meal.des} price={meal.price}/></li>);
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
