
import Header from './Components/Layout/Header';
import MealsSummary from './Components/Meals/MealsSummary';
import Availablemeals from './Components/Meals/Availablemeals';
import Mealsitem from './Components/Meals/Mealsitem';
import Cart from './Components/Cart/Cart';

import  {Fragment,useState} from 'react';
import CartProvider from './Store/CartProvider';

function App() {
  const[cartIsShown,setCartIsShown]=useState(false);

  const showcartHandler=()=>{
    setCartIsShown(true);
  }

  const hidecartHandler=()=>{
    setCartIsShown(false);
  }

  return (
     <CartProvider>
      {cartIsShown && <Cart onClose={hidecartHandler}/>}
      <Header onShowcart={showcartHandler}/>
      <Mealsitem></Mealsitem>
      
     </CartProvider>
  );
}

export default App;
