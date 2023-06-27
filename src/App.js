import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import MealsSummary from './Components/Meals/MealsSummary';

function App() {
  return (
     <div>
      <Header></Header>
      <MealsSummary></MealsSummary>
     </div>
  );
}

export default App;
