import './App.css';
import PizzaBuilder from './components/PizzaBuilder';
import { useEffect, useState } from 'react';
import Heading from './components/Heading';
import NavigationMenu from './components/NavigationMenu';
import Menu from './components/Menu';


function App() {

  const API = "http://localhost:3000/pizzas";

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(p => setPizzas(p));
  },[])

  return (
    <div className="App">
      <Heading/>
      <NavigationMenu/>
      <div className="spacer">Blank space</div>
      <PizzaBuilder pizzas={pizzas} />
        <Menu
          pizzas = {pizzas}
          setPizzas={setPizzas}
        />
        <div className="footer">Footer</div>  
    </div>
  );
}

export default App;
