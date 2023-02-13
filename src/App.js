import './App.css';
import PizzaBuilder from './components/PizzaBuilder';
import { useEffect, useState } from 'react';
import background from "./backgroundPic.png";
import Heading from './components/Heading';
import NavigationMenu from './components/NavigationMenu';
import Menu from './components/Menu';
import Options from './components/Options';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
} */
`

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
      <createGlobalStyle />
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
