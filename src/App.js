import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import MealsSummary from './Components/Meals/MealsSummary';
import Availablemeals from './Components/Meals/Availablemeals';
import Mealsitem from './Components/Meals/Mealsitem';
import Cart from './Components/Cart/Cart';

function App() {
  return (
     <div>
      <Cart></Cart>
      <Header></Header>
      <Mealsitem></Mealsitem>
      
     </div>
  );
}

export default App;
