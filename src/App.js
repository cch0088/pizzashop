import './App.css';
import PizzaBuilder from './components/PizzaBuilder';
import { useEffect, useState } from 'react';

function App() {

  const API = "http://localhost:3000/pizzas";

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch(API).then(r => r.json()).then(p => setPizzas(p));
  },[])

  return (
    <div>
      <PizzaBuilder pizzas={pizzas} />
    </div>
  );
}

export default App;
