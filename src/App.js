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

  const [toppings, setToppings] = useState([]);
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

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
      <PizzaBuilder toppings={toppings} type={type} image={image} />
      <Options toppings={toppings} setToppings={setToppings}/>
      </div>
        <Menu setToppings={setToppings} setType={setType} setImage={setImage}
          pizzas = {pizzas}
          setPizzas={setPizzas}
        />
        <div className="footer">Footer</div>  
        <div className="bottom"></div>
    </div>
  );
}

export default App;
