//import './App.css';
import PizzaBuilder from './components/PizzaBuilder';
import { useEffect, useState } from 'react';
import background from "./backgroundPic.png";
import Heading from './components/Heading';
import NavigationMenu from './components/NavigationMenu';
import Menu from './components/Menu';
import TopMenu from './components/TopMenu';
import {createGlobalStyle} from 'styled-components';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import Footer from './components/Footer';
import Orders from './components/Orders';


const GlobalStyle = createGlobalStyle`
body {
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
}

.App {
  text-align: center;
} 

#horz-list ul {
  margin: 50;
  padding: 0;
  list-style-type: none;
  text-align: center;
}

#horz-list ul li {
  display: inline;
  padding: 30px;
  color: white;
  font-weight: bold;
}


.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

body {
  background-color: black;
}

.pizza-display {
  width: 100%;
}

.content {
  min-height: 450px;
  background-color: rgba(255, 255, 255, 0.6);;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.lower-content {
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spacer {
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heading {
  height: 90px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.navigation {
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-color: white;
  border-style: solid;
  border-width: 2px;
}

.bottom {
  height: 70px;
  width: 100%;
}

.footer {
  height: 40px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.picture {
  height: 400px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.pizza-display {
  width: 40%;
  margin-right: 10%;
  position: absolute;
}

.options {
  width: 150px;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 10px;
}

.menuNav {
  display: flex;
  justify-content: center;
  overflow: auto;
  width: 100%;
} 

.add-pizza-form {
  margin: 1rem 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-text {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

#pizza-type-input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

.boldText {
  font-weight: 600;
}

`

function App() {

  const API = "http://localhost:3000/pizzas";
  const API_T = "http://localhost:3000/toppings";

  const [pizzas, setPizzas] = useState([]);
  const [allToppings, setAllToppings] = useState([]);
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(p => setPizzas(p));
  },[])

  useEffect(() => {
    fetch(API_T)
    .then(r => r.json())
    .then(t => setAllToppings(t));
  },[])

  useEffect(() => {
    fetch('http://localhost:3000/orders')
    .then(r => r.json())
    .then(data => setOrders(data))

  }, [])

  return (
      <Switch>
        <div className="App" style={{ backgroundImage: `url(${background})`}}>
        <GlobalStyle />
        <Heading/>
        <NavBar />
        <div className="spacer"></div>
        <Route path="/about">
          <NavigationMenu />
        </Route>
        <Route path="/options">
          <PizzaBuilder pizzas={pizzas} allToppings={allToppings} orders={orders} setOrders={setOrders}/>
        </Route>
        <Route path ="/orders">
          <Orders
          orders={orders}
          setOrders={setOrders}
          />
        </Route>
        <Route path="/menu">
          <TopMenu pizzas= {pizzas} type={type} toppings={toppings} image={image}/>
        </Route>

      <Footer />
      </div>
      </Switch>
  );
}

export default App;
