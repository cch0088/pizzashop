import './App.css';
import PizzaBuilder from './components/PizzaBuilder';
import { useEffect, useState } from 'react';
import background from "./backgroundPic.png";
import Heading from './components/Heading';
import NavigationMenu from './components/NavigationMenu';
import Menu from './components/Menu';
import Options from './components/Options';

function App() {

  const API = "http://localhost:3000/pizzas";

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(p => setPizzas(p));
  },[])

  return (
    <div className="App" style={{ backgroundImage: `url(${background})`}}>
      <Heading/>
      <NavigationMenu/>
      <div className="spacer"></div>
      <div className="content">
      <PizzaBuilder />
      <Options />
      </div>
        <Menu
          pizzas = {pizzas}
          setPizzas={setPizzas}
        />
        <div className="footer">Footer</div>  
        <div className="bottom"></div>
    </div>
  );
}

export default App;
